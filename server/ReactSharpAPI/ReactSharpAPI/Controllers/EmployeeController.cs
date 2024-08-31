using Microsoft.AspNetCore.Mvc;
using ReactSharpAPI.Models;
using ReactSharpAPI.Repositories;

namespace ReactSharpAPI.Controllers
{
    [Route("v1/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        // GET: /Employee/
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        {
            return Ok(await _employeeRepository.GetAll());
        }

        // GET: /Employee/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            var empleado = await _employeeRepository.GetById(id);

            if (empleado == null)
            {
                return NotFound();
            }

            return Ok(empleado);
        }

        // POST: /Employee/
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();

            }
            await _employeeRepository.Add(employee);
            return CreatedAtAction(nameof(GetEmployee), new { id = employee.Id }, employee);
        }

        // PUT: /Employee/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult> PutEmployee(int id, Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            await _employeeRepository.Update(id, employee);
            return NoContent();
        }

        // DELETE: /Employee/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var employee = await _employeeRepository.GetById(id);
            if (employee == null)
            {
                return NotFound();
            }

            await _employeeRepository.Delete(id);

            return NoContent();
        }
    }
}