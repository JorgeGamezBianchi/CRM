using System;

namespace CRM_V1.Models
{
    public class Cnc : Campania
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
        //public int Linea18 { get; set; }
        public double Pago18 { get; set; }
        public int Linea24 { get; set; }
        public double Pago24 { get; set; }
        public int Linea36 { get; set; }
        public double Pago36 { get; set; }
        public int Linea48 { get; set; }
        public double Pago48 { get; set; }
        public int Linea60 { get; set; }
        public double Pago60 { get; set; }
        //public int Linea72 { get; set; }
        public double Pago72 { get; set; }

        public int Plazo { get; set; }
        public int Tasa { get; set; } //Actualizado 04042019

        public int MontoPromesa { get; set; }
        public string Sucursal { get; set; }
        public string Division { get; set; }
        public string DirRegional { get; set; }
        public string NumeroSucursal { get; set; }
        public string RFCRVT { get; set; }
        public string FechaInsercion { get; set; }
        public string FechaActualizacion { get; set; }
        public string FechaVicitaSucursal { get; set; }
        public string EstadoSucursal { get; set; }
        public string MunicipioSucursal { get; set; }
        public Double CATCNC { get; set; }
        public string FechaCATCNC { get; set; }
        public int EstatusVenta { get; set; }
        public string SeleccionaVentaCNC { get; set; }
        public string autentica { get; set; }
        public int ID_Calificacion { get; set; }
    }
}