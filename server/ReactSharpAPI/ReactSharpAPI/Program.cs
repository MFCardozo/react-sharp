using Microsoft.EntityFrameworkCore;
using ReactSharpAPI.Context;
using ReactSharpAPI.Helpers;
using ReactSharpAPI.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Configurar la conexión a la base de datos PostgreSQL
var connectionString = $"Host={Environment.GetEnvironmentVariable("DB_HOST")};" +
                        $"Port={Environment.GetEnvironmentVariable("DB_PORT")};" +
                        $"Database={Environment.GetEnvironmentVariable("DB_NAME")};" +
                        $"Username={Environment.GetEnvironmentVariable("DB_USER")};" +
                        $"Password={Environment.GetEnvironmentVariable("DB_PASSWORD")}";

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(connectionString));

// para DEV
// builder.Services.AddDbContext<ApplicationDbContext>(options =>
//    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add services to the container.
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.Converters.Add(new CustomDateTimeConverter("yyyy-MM-dd"));
});
builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository>();
builder.Services.AddScoped<IHourRegisterRepository, HourRegisterRepository>();
builder.Services.AddScoped<IEmployeeHourReportRepository, EmployeeHourReportRepository>();

builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenAnyIP(5001);
});

// Para ambiente de pruebas
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder => builder.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UsePathBase(new PathString("/react-sharp-api"));

app.UseRouting();

app.UseAuthorization();

// para ambiente DEV
app.UseCors("AllowAll");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();