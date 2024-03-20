using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRM_V1.Models
{
    public enum TipoUsuario
    {
        NINGUNO, SUPERVISOR, COORDINADOR, RVT, PROCESOS, 
        LIBERADOS, VALIDACION, GERENCIA, RESPONCE,
        OTRO, SISTEMAS, CAPACITACION
    }

    public class User
    {
        public long Id { get; set; }
        public TipoUsuario Tipo { get; set; }
        public string Name { get; set; }
        public string LastName1 { get; set; }
        public string LastName2 { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}