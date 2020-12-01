using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Entities;
using API.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace API.Services
{
    public class ServicioToken : IServicioToken
    {
        private readonly SymmetricSecurityKey _llave;
        public ServicioToken(IConfiguration config)
        {
            _llave = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["LlaveToken"]));
        }

        public string CrearToken(AppUsuario usuario)
        {
            var reclamaciones = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.NameId, usuario.LoginUsuario)
            };

            var credenciales = new SigningCredentials(_llave, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(reclamaciones),
                Expires = DateTime.Now.AddDays(6),
                SigningCredentials = credenciales
            };

            var manejadorToken = new JwtSecurityTokenHandler();

            var token = manejadorToken.CreateToken(tokenDescriptor);

            return manejadorToken.WriteToken(token);
        }
    }
}