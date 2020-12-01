using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class UsuariosController : BaseApiController
    {
        private readonly ContextoDatos _contexto;
        public UsuariosController(ContextoDatos contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<AppUsuario>>> ObtenerUsuarios()
        {
            return await _contexto.Usuarios.ToListAsync();
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUsuario>> ObtenerUsuario(int id)
        {
            return await _contexto.Usuarios.FindAsync(id);
        }        


    }
}