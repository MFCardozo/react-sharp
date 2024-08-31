using Microsoft.AspNetCore.Mvc;

namespace ReactSharpAPI.Controllers
{
    [Route("v1/[controller]")]
    [ApiController]
    public class StatusController : ControllerBase
    {
        public IActionResult Index()
        {
            return Ok(new { status = "OK" });
        }
    }
}
