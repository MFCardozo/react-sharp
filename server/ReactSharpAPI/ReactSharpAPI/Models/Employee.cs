namespace ReactSharpAPI.Models
{
    //Funcionario
    public class Employee
    {
        public int Id { get; set; }
        public string Names { get; set; }

        public string LastNames { get; set; }

        // Nro de C.I
        public string Document { get; set; }
        public string DateOfBirth { get; set; }
    }
}
