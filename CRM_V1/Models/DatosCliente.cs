using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRM_V1.Models
{
    public class DatosCliente
    {
        public string NumeroCliente { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string FechaNacimiento { get; set; }
        public string RFC { get; set; }
        public string Calle { get; set; }
        public string NumeroExterior { get; set; }
        public string NumeroInterior { get; set; }
        public string CodigoPostal { get; set; }
        public string Colonia { get; set; }
        public string Municipio { get; set; }
        public string Estado { get; set; }
        public string Celular { get; set; }
        public string TelefonoCasa { get; set; }

        public List<Campania> Campanias { get; set; }
    }
}
