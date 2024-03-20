using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRM_V1.Models
{
    public class Cpc : Campania
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

        //(1) Mantenimiento 04 marzo 2019
        //public int MontoMax24 { get; set; }
        //public int Pago24 { get; set; }
        //public int MontoMax36 { get; set; }
        //public int Pago36 { get; set; }
        //public string MontoMax48 { get; set; }
        //public string Pago48 { get; set; }
        //public int MontoMax60 { get; set; }
        //public int Pago60 { get; set; }

        public double MontoMax24 { get; set; }
        public double Pago24 { get; set; }
        public double MontoMax36 { get; set; }
        public double Pago36 { get; set; }
        public double MontoMax48 { get; set; }
        public double Pago48 { get; set; }
        public double  MontoMax60 { get; set; }
        public double Pago60 { get; set; }

        public string Tasa { get; set; }
        public int Plazo { get; set; }
        
        //(1) Mantenimiento 04 marzo 2019
        //public int MontoPromesa { get; set; }
        public double MontoPromesa { get; set; }

        public string Sucursal { get; set; }
        public string NumeroSucursal { get; set; }
        public string RFCRVT { get; set; }
        public string FechaVicitaSucursal { get; set; }
        public string FechaInsercion { get; set; }
        public string FechaActualacion { get; set; }
        public int EstatusVenta { get; set; }
        public string EstadoSucursal { get; set; }
        public string MunicipioSucursal { get; set; }

        public string Division { get; set; }
        //(1) Mantenimiento 15 marzo 2019
        public string Oferta { get; set; }
        public Double CAT { get; set; }
        public string Regional { get; set; }
        public string SeleccionaVenta { get; set; }
        public string Fecha_cat { get; set; }
        //public string Val_Fecha { get; set; }
        public int ID_Calificacion { get; set; }
        public string autentica { get; set; }

    }
}