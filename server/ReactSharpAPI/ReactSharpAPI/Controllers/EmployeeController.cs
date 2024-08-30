using Microsoft.AspNetCore.Mvc;
using ReactSharpAPI.Models;
using ReactSharpAPI.Repositories;

namespace ReactSharpAPI.Controllers
{
    [Route("react-sharp-api/v1/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        // GET: {API}/Employee/
        [HttpGet]
        public ActionResult<IEnumerable<Employee>> GetEmployees()
        {
            return Ok(_employeeRepository.GetAll());
        }

        // GET: {API}/Employee/{id}
        [HttpGet("{id}")]
        public ActionResult<Employee> GetEmployee(int id)
        {
            var empleado = _employeeRepository.GetById(id);

            if (empleado == null)
            {
                return NotFound();
            }

            return Ok(empleado);
        }

        // POST: {API}/Employee/
        [HttpPost]
        public ActionResult<Employee> PostEmployee(Employee empleado)
        {
            _employeeRepository.Add(empleado);
            return CreatedAtAction(nameof(GetEmployee), new { id = empleado.Id }, empleado);
        }

        // PUT: {API}/Employee/{id}
        [HttpPut("{id}")]
        public IActionResult PutEmployee(int id, Employee empleado)
        {
            if (id != empleado.Id)
            {
                return BadRequest();
            }

            var existingEmpleado = _employeeRepository.GetById(id);
            if (existingEmpleado == null)
            {
                return NotFound();
            }

            _employeeRepository.Update(empleado);

            return NoContent();
        }

        // DELETE: {API}/Employee/
        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            var empleado = _employeeRepository.GetById(id);
            if (empleado == null)
            {
                return NotFound();
            }

            _employeeRepository.Delete(id);

            return NoContent();
        }
    }
}
