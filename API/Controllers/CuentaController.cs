using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using API.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Interfaces;

namespace API.Controllers
{
    public class CuentaController : BaseApiController
    {
        private readonly ContextoDatos _contexto;
        private readonly IServicioToken _servicioToken;
        public CuentaController(ContextoDatos contexto, IServicioToken servicioToken)
        {
            _servicioToken = servicioToken;
            _contexto = contexto;
        }

        [HttpPost("registrar")]
        public async Task<ActionResult<UsuarioDto>> Registrar(RegistrarDto registrarDto)
        {
            if (await UsuarioExiste(registrarDto.Loginusuario)) return BadRequest("Login de usuario ya existe");

            using var hmac = new HMACSHA512();

            var usuario = new AppUsuario
            {
                LoginUsuario = registrarDto.Loginusuario.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registrarDto.Password)),
                PasswordSalt = hmac.Key
            };

            _contexto.Usuarios.Add(usuario);
            await _contexto.SaveChangesAsync();

            return new UsuarioDto
            {
                LoginUsuario = usuario.LoginUsuario,
                Token = _servicioToken.CrearToken(usuario)
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<UsuarioDto>> Login(LoginDto loginDto)
        {
            var usuario = await _contexto.Usuarios.SingleOrDefaultAsync(x => x.LoginUsuario == loginDto.Loginusuario);

            if (usuario == null) return Unauthorized("Nombre de usuario inválido");

            using var hmac = new HMACSHA512(usuario.PasswordSalt);

            var hashCalculado = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

            for (int i = 0; i < hashCalculado.Length; i++)
            {
                if (hashCalculado[i] != usuario.PasswordHash[i]) return Unauthorized("Password incorrecto");
            }

            return new UsuarioDto
            {
                LoginUsuario = usuario.LoginUsuario,
                Token = _servicioToken.CrearToken(usuario)
            };
        }

        private async Task<bool> UsuarioExiste(string loginusuario)
        {
            return await _contexto.Usuarios.AnyAsync(x => x.LoginUsuario == loginusuario.ToLower());
        }
    }
}