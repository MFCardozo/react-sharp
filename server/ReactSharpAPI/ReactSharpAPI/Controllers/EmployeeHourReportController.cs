using Microsoft.AspNetCore.Mvc;
using ReactSharpAPI.Models;
using ReactSharpAPI.Repositories;

namespace ReactSharpAPI.Controllers
{
    [Route("v1/[controller]")]
    [ApiController]
    public class EmployeeHourReportController : ControllerBase
    {
        private readonly IEmployeeHourReportRepository _employeeHourReportRepository;

        public EmployeeHourReportController(IEmployeeHourReportRepository employeeHourReportRepository)
        {
            _employeeHourReportRepository = employeeHourReportRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeHourReport>>> GetHourRegisters(
            [FromQuery] int employeeId,
            [FromQuery] DateTime startDate,
            [FromQuery] DateTime endDate)
        {
            if (endDate < startDate)
            {
                return BadRequest("La fecha de fin debe ser posterior a la fecha de inicio.");
            }

            var hourRegisters = await _employeeHourReportRepository.GetAllGetHourRegistersByEmployeeAndDateRangeAsync(employeeId, startDate, endDate);

            if (hourRegisters == null || !hourRegisters.Any())
            {
                return NotFound("No se encontraron registros para el empleado en el rango de fechas proporcionado.");
            }

            return Ok(hourRegisters);
        }
    }
}
