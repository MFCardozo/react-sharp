using Microsoft.EntityFrameworkCore;
using ReactSharpAPI.Context;
using ReactSharpAPI.Models;

namespace ReactSharpAPI.Repositories
{
    public class HourRegisterRepository : IHourRegisterRepository
    {
        private readonly ApplicationDbContext _context;

        public HourRegisterRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task Add(HourRegister hourRegister)
        {
            await _context.HourRegisters.AddAsync(hourRegister);
            await _context.SaveChangesAsync();
        }
    }
}
