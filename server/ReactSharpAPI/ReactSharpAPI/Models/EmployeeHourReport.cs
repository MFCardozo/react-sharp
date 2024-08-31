using System.ComponentModel.DataAnnotations.Schema;

namespace ReactSharpAPI.Models
{
    public class EmployeeHourReport
    {

        [Column("employee_id")]
        public int EmployeeId { get; set; }

        [Column("date_register")]
        public DateTime DateRegister { get; set; }

        [Column("start_hour")]
        public TimeSpan StartHour { get; set; }

        [Column("end_hour")]
        public TimeSpan EndHour { get; set; }

        [Column("quantity_hour")]
        public decimal QuantityHour { get; set; }

        [Column("quantity_hour_sum")]
        public decimal QuantityHourSum { get; set; }

    }
}
