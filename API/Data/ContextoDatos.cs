using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class ContextoDatos : DbContext
    {
        public ContextoDatos(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUsuario> Usuarios { get; set; }
        
    }
}