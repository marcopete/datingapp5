using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class AppUsuario
    {
        [Key]
        public int IdUsuario { get; set; }

        public string LoginUsuario { get; set; }
    }
}