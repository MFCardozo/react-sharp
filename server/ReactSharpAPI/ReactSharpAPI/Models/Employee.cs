using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactSharpAPI.Models
{
    //Funcionario
    public class Employee
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("name")]
        [Required]
        public string Name { get; set; }

        [Column("last_name")]
        public string LastName { get; set; }

        // Nro de C.I
        [Column("doc_number")]
        [Required]
        public string DocumentNumber { get; set; }

        [Column("date_of_birth")]
        public DateTime DateOfBirth { get; set; }
    }
}