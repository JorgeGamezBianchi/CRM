using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRM_V1.Models
{
    public class Direccion
    {
        public string idCodigo { get; set; }
        public string Estado { get; set; }
        public string DelMun { get; set; }
        public string Colonia { get; set; }
        public string ClaveEstado { get; set; }
        public string ClaveDelMun { get; set; }
    }
}