using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions
{
    public static class ExtensionesServicioAplicacion
    {
        public static IServiceCollection AgregarServiciosAplicacion(this IServiceCollection services, IConfiguration config)
        {
            services.AddScoped<IServicioToken, ServicioToken>();
            services.AddDbContext<ContextoDatos>(options =>
            {
                options.UseSqlServer(config.GetConnectionString("ConexionPorDefecto"));
            });

            return services;
        }
    }
}