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

        public async Task Add(Employee empleado)
        {
            await _context.Employees.AddAsync(empleado);
            await _context.SaveChangesAsync();
        }

        public async Task Update(Employee empleado)
        {
            _context.Employees.Update(empleado);
            await _context.SaveChangesAsync();
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










        /*
        private readonly List<Employee> _employees;

        public EmployeeRepository()
        {
            _employees = new List<Employee>
        {
            new Employee { Id = 1, Names = "Juan Pérez", LastNames = "Cardozo Rami" ,Document = "32423", DateOfBirth = "1999-08-08"},
            new Employee { Id = 2, Names = "Jose Emmanuel", LastNames = "Alfonzo Kichu" ,Document = "562623", DateOfBirth = "1999-08-08"}
        };
        }

        public IEnumerable<Employee> GetAll() => _employees;

        public Employee GetById(int id) => _employees.FirstOrDefault(e => e.Id == id );

        public void Add(Employee empleado)
        {
            empleado.Id = _employees.Max(e => e.Id) + 1;
            _employees.Add(empleado);
        }

        public void Update(Employee empleado)
        {
            var existingEmployee = GetById(empleado.Id);
            if (existingEmployee != null)
            {
                existingEmployee.Names = empleado.Names;
                existingEmployee.LastNames = empleado.LastNames;
                existingEmployee.Document = empleado.Document;
                existingEmployee.DateOfBirth = empleado.DateOfBirth;
            }
        }

        public void Delete(int id)
        {
            var empleado = GetById(id);
            if (empleado != null)
            {
                _employees.Remove(empleado);
            }
        }
        */
    }
}