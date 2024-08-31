using ReactSharpAPI.Models;

namespace ReactSharpAPI.Repositories
{
    public interface IEmployeeHourReportRepository
    {
        Task<IEnumerable<EmployeeHourReport>> GetAllGetHourRegistersByEmployeeAndDateRangeAsync(int employeeId, DateTime startDate, DateTime endDate);
    }
}
