using Microsoft.EntityFrameworkCore;
using ReactSharpAPI.Context;
using ReactSharpAPI.Models;

namespace ReactSharpAPI.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly ApplicationDbContext _context;

        public EmployeeRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Employee>> GetAll()
        {
            return await _context.Employees.ToListAsync();
        }

        public async Task<Employee> GetById(int id)
        {
            return await _context.Employees.FindAsync(id);
        }

        public async Task Add(Employee employee)
        {
            employee.DateOfBirth = employee.DateOfBirth.ToUniversalTime();
            await _context.Employees.AddAsync(employee);
            await _context.SaveChangesAsync();
        }

        public async Task Update(int id, Employee employee)
        {
            employee.DateOfBirth = employee.DateOfBirth.ToUniversalTime();
            _context.Entry(employee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                var existingEmployee = await _context.Employees.FindAsync(id);
                if (existingEmployee != null)
                {
                    throw;
                }
            }
        }

        public async Task Delete(int id)
        {
            var empleado = await _context.Employees.FindAsync(id);
            if (empleado != null)
            {
                _context.Employees.Remove(empleado);
                await _context.SaveChangesAsync();
            }
        }
    }
}