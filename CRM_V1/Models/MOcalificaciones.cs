using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRM_V1.Models
{
    public class MOcalificaciones : Campania
    {
        public string Folio { get; set; }
        public string NumeroCliente { get; set; }
        public int Calificacion { get; set; }
    }
}