using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRM_V1.Models
{
    public class Pyme: Campania
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

        public string Id { get; set; }
        public string Folio { get; set; }
        public int Linea36 { get; set; }
        public string Tasa36 { get; set; }
        public int Pago36 { get; set; }
        public int Linea48 { get; set; }
        public string Tasa48 { get; set; }
        public int Pago60 { get; set; }
        public int Pago48 { get; set; }
        public int Linea60 { get; set; }
        public string Tasa60 { get; set; }
        public int Plazo { get; set; }
        public int MontoPromesa { get; set; }
        public string Sucursal { get; set; }
        public string NumeroSucursal { get; set; }
        public int LineaActual { get; set; }
        public int LineaCLI { get; set; }
        public float CatAmortizable { get; set; }
        public float CatRevolvente { get; set; }
        public int LineaAmortizable { get; set; }
        public int TasaAmortizable { get; set; }
        public float PagoMenAmortizable { get; set; }
        public int LineaRevolvente { get; set; }
        public float TasaRevolvente { get; set; }
        public int LineaTotal { get; set; }
        public string RFCRVT { get; set; }
        public string FechaInsercion { get; set; }
        public string FechaActualizacion { get; set; }
        public string FechaVicitaSucursal { get; set; }
        public string Division { get; set; }
        public int EstatusVenta { get; set; }
        public string NumeroInt { get; set; }
        public string NumeroExt { get; set; }
        public string Regional { get; set; }
    }
}