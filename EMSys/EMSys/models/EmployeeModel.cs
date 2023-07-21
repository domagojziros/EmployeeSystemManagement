using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace EMSys.models 
{
    public class Employee
    {
        [Key]
        public int Id {get; set;}

        [Required]
        public string Name {get; set;}

        [Required]
        public string Email {get; set;}

        [Required]
        public string Department {get; set;}

        public string JobTitle {get; set;}
        public decimal Salary {get; set;}


    }
}