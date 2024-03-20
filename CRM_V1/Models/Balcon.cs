using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRM_V1.Models
{
    public class Balcon: Campania
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
        public string NombreComp { get; set; }
        public string TelTrabajo { get; set; }
        public string Celular2 { get; set; }
        public float LineaActual { get; set; }
        public float LineaNueva { get; set; }
        public float Incremento { get; set; }
        public string Producto { get; set; }
        public string Ult4DGT { get; set; }
        public string TasaAnual { get; set; }
        public string Cat { get; set; }
        public string FechaCat { get; set; }
        public float MontoMaximo { get; set; }
        public int TipoLlamada { get; set; }
        public string Gepc { get; set; }
        public int Plazo1 { get; set; }
        public int NombreBanco1 { get; set; }
        public float CantTransferencia1 { get; set; }
        public int Plazo2 { get; set; }
        public int NombreBanco2 { get; set; }
        public float CantTransferencia2 { get; set; }
        public int Plazo3 { get; set; }
        public int NombreBanco3 { get; set; }
        public float CantTransferencia3 { get; set; }
        public int Plazo4 { get; set; }
        public int NombreBanco4 { get; set; }
        public float CantTransferencia4 { get; set; }
        public int Plazo5 { get; set; }
        public int NombreBanco5 { get; set; }
        public float CantTransferencia5 { get; set; }
        public string FechaVenta { get; set; }
        public int Estatus { get; set; }
        public string RFCRVT { get; set; }
        public string FechaInsercion { get; set; }
        public int EstatusVenta { get; set; }
        public string FechaVisitaSucursal { get; set; }
        public string Sucursal { get; set; }
        public string Division { get; set; }
        public string Regional { get; set; }
        public string NumeroSucursal { get; set; }
        public string MunicipioSucursal { get; set; }
        public string EstadoSucursal { get; set; }
        public int Calificacion { get; set; }
    }
}