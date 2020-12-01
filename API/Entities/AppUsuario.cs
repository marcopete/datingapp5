using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class AppUsuario
    {
        [Key]
        public int IdUsuario { get; set; }
        public string LoginUsuario { get; set; }
        public string NombreUsuario { get; set; }
        public string ApellidoUsuario { get; set; }
        public string EmailUsuario { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}