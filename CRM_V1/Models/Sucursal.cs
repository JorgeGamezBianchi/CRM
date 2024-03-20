using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRM_V1.Models
{
    public class Sucursal
    {
        public string SIRH { get; set; }
        public string NOMBRE_DISPOSITIVO { get; set; }
        public string DIVISION { get; set; }
        public string DIRECCION { get; set; }
        public string DOMICILIO { get; set; }
        public string COLONIA { get; set; }
        public string CALLE1 { get; set; }
        public string CALLE2 { get; set; }
        public string DELEG_MUNIC { get; set; }
        public string CP { get; set; }
        public string LUNES_VIERNES_AP{ get; set; }
        public string LUNES_VIERNES_CIE { get; set; }
        public string SABADOS_AP { get; set; }
        public string SABADOS_CIE { get; set; }

    }
}