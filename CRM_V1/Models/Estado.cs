using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRM_V1.Models
{
    public class Estado
    {
        public string Id { get; set; }
        public string Valor { get; set; }
        public string Nombre { get; set; }
        public List<Municipio> Municipios { get; set; }
    }
}