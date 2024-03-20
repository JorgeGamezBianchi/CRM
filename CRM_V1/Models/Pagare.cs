using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRM_V1.Models
{
    public class Pagare: Campania
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
        public string CuentaBasica { get; set; }
        public string CuentaBasicaCFC { get; set; }
        public string CuentaCPC { get; set; }
        public string CuentaEje { get; set; }
        public string CuentaEjeCFC { get; set; }
        public string DescuentoOferta { get; set; }
        public string FechaCat { get; set; }
        public string Folio { get; set; }
        public string GerenciaDeMercado { get; set; }
        public string NMSucursal { get; set; }
        public string NombreEmpresa { get; set; }
        public string NumeroContrato { get; set; }
        public string Prioridad { get; set; }
        public string RangoLinea { get; set; }
        public string SubOferta { get; set; }
        public string Tasa1 { get; set; }
        public string Tasa2 { get; set; }
        public string Telefono1 { get; set; }
        public string TelefonoOficina1 { get; set; }
        public string TelefonoOficina2 { get; set; }
        public string TipoBase { get; set; }
        public string Celular1 { get; set; }
        public string Celular2 { get; set; }
        public string Email { get; set; }
        public string NumeroSucursal { get; set; }
        public string RFCRVT { get; set; }
        public string FechaInsercion { get; set; }
        public string FechaActualizacion { get; set; }
        public string FechaVicitaSucursal { get; set; }
        public int EstatusVenta { get; set; }
        public string Division { get; set; }
        public string Regional { get; set; }
        public string Sucursal { get; set; }
        //public string TipoVenta { get; set; }
        public int Estado_SucPagare { get; set; }
        public int Municipio_SucPagare { get; set; }
    }
}