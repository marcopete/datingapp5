using API.Entities;

namespace API.Interfaces
{
    public interface IServicioToken
    {
         string CrearToken(AppUsuario usuario);
    }
}