using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactSharpAPI.Models
{
    // Registro de entrada y salida
    public class HourRegister
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("date_register")]
        [Required]
        public DateTime dateRegister { get; set; }

        // Hora de entrada
        [Column("start_hour")]
        [Required]
        public TimeSpan StartHour { get; set; }

        // Hora de salida
        [Column("end_hour")]
        [Required]
        public TimeSpan FinishHour { get; set; }

        [Column("employee_id")]
        [Required]
        public int EmployeeID { get; set; }
    }
}