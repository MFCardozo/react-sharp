using ReactSharpAPI.Models;

namespace ReactSharpAPI.Repositories
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<Employee>> GetAll();

        Task<Employee> GetById(int id);

        Task Add(Employee employee);

        Task Update(int id, Employee employee);

        Task Delete(int id);
    }
}