using Microsoft.EntityFrameworkCore;
using Npgsql;
using ReactSharpAPI.Models;

namespace ReactSharpAPI.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<HourRegister> HourRegisters { get; set; }
        public DbSet<EmployeeHourReport> EmployeeHourReports { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Employee>().ToTable("employee");

            modelBuilder.Entity<HourRegister>().ToTable("hour_register")
                .Property(hr => hr.EmployeeID)
            .HasDefaultValue(null); // Previene valor por defecto y fuerza validacion

            modelBuilder.Entity<EmployeeHourReport>()
            .HasNoKey(); // Relacion sin Primary Key
        }

        // Reporte de Funcionario por Horas
        public async Task<List<EmployeeHourReport>> GetHourRegistersByEmployeeAndDateRangeAsync(int employeeId, DateTime startDate, DateTime endDate)
        {
            var query = @"WITH hour_cte AS (
                            SELECT id,
                                   (EXTRACT(EPOCH FROM (end_hour::time - start_hour::time)) / 3600)::NUMERIC(20, 2) AS quantity_hour
                            FROM hour_register
                            WHERE employee_id = @employeeId
                        )
                        SELECT hr.employee_id,
                               hr.date_register,
                               hr.start_hour,
                               hr.end_hour,
                               hc.quantity_hour,
                               (sum(hc.quantity_hour) OVER (ORDER BY date_register, hr.start_hour, hr.end_hour)) AS quantity_hour_sum

                        FROM hour_register hr
                                 JOIN hour_cte hc ON hr.id = hc.id
                        WHERE hr.employee_id = @employeeId
                        AND date_register BETWEEN @startDate AND @endDate
                        order by hr.date_register;";

            return await EmployeeHourReports.FromSqlRaw(query,
                new NpgsqlParameter("employeeId", employeeId),
                new NpgsqlParameter("startDate", startDate),
                new NpgsqlParameter("endDate", endDate))
                .ToListAsync();
        }
    }
}