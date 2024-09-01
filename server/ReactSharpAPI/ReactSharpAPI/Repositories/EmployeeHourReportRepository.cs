using ReactSharpAPI.Context;
using ReactSharpAPI.Models;

namespace ReactSharpAPI.Repositories
{
    public class EmployeeHourReportRepository : IEmployeeHourReportRepository
    {
        private readonly ApplicationDbContext _context;

        public EmployeeHourReportRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<EmployeeHourReport>> GetAllGetHourRegistersByEmployeeAndDateRangeAsync(int employeeId, DateTime startDate, DateTime endDate)
        {
            return await _context.GetHourRegistersByEmployeeAndDateRangeAsync(employeeId, startDate, endDate);
        }
    }
}