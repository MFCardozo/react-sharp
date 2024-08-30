using Microsoft.AspNetCore.Mvc;
using ReactSharpAPI.Models;
using ReactSharpAPI.Repositories;

namespace ReactSharpAPI.Controllers
{
    [Route("react-sharp-api/v1/[controller]")]
    [ApiController]
    public class HourRegisterController : ControllerBase
    {
        private readonly IHourRegisterRepository _hourRegisterRepository;

        public HourRegisterController(IHourRegisterRepository hourRegisterRepository)
        {
            _hourRegisterRepository = hourRegisterRepository;
        }

        // POST: {API}/HourRegister/
        [HttpPost]
        public ActionResult<Employee> PostHourRegister(HourRegister hourRegister)
        {
            _hourRegisterRepository.Add(hourRegister);
            return CreatedAtAction( hourRegister);
        }
    }
}
