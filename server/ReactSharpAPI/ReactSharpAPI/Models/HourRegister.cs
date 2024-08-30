namespace ReactSharpAPI.Models
{
    // Registro de entrada y salida
    public class HourRegister
    {
        public int Id { get; set; }

        // Hora de entrada
        public string StartHour { get; set; }

        // Hora de salida
        public string FinishHour { get; set; }
        public int EmployeeID { get; set; }
    }
}
