using Microsoft.EntityFrameworkCore;
using ReactSharpAPI.Models;

namespace ReactSharpAPI.Context
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Employee>().ToTable("employee");
            modelBuilder.Entity<HourRegister>().ToTable("hour_register");
        }
    }
}
