using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRM_V1.Models
{
    public class Redisposicion: Campania
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

        public int Id { get; set; }
        public string Folio { get; set; }
        public string NumeroTargeta { get; set; }
        public string Producto { get; set; }
        public int LineaCredito { get; set; }
        public string TasaOriginal { get; set; }
        public int PlazoCredito { get; set; }
        public string MontoDispersion { get; set; }
        public int Pago36 { get; set; }
        public int Pago48 { get; set; }
        public int Pago60 { get; set; }
        public string Incremento { get; set; }
        public int LineaActual { get; set; }
        public int LineaNueva { get; set; }
        public string CantidadDisponer { get; set; }
        public int Ultimo3MesesUtilizandoBancaNet { get; set; }
        public int TieneTDCCitibanamex { get; set; }
        public string RFCRVT { get; set; }
        public string FechaInsercion { get; set; }
        public string CualEsCP { get; set; }
        public int EstatusVenta { get; set; }

    }
}