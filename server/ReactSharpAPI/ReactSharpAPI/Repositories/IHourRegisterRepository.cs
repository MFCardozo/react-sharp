using ReactSharpAPI.Models;

namespace ReactSharpAPI.Repositories
{
    public interface IHourRegisterRepository
    {
        Task Add(HourRegister hourRegister);
    }
}