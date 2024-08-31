using Microsoft.AspNetCore.Mvc;
using ReactSharpAPI.Models;
using ReactSharpAPI.Repositories;

namespace ReactSharpAPI.Controllers
{
    [Route("v1/[controller]")]
    [ApiController]
    public class HourRegisterController : ControllerBase
    {
        private readonly IHourRegisterRepository _hourRegisterRepository;

        public HourRegisterController(IHourRegisterRepository hourRegisterRepository)
        {
            _hourRegisterRepository = hourRegisterRepository;
        }

        // POST: /HourRegister/
        [HttpPost]
        public async Task<ActionResult<HourRegister>> PostHourRegister(HourRegister hourRegister)
        {
            if (!ModelState.IsValid)
            {

                return BadRequest();

            }
            await _hourRegisterRepository.Add(hourRegister);
            return NoContent();
        }
    }
}