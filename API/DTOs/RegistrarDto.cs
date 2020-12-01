using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegistrarDto
    {
        [Required]
        public string Loginusuario { get; set; }
        
        [Required]
        public string Password { get; set; }
    }
}