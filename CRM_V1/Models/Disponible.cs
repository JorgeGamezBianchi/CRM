using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRM_V1.Models
{
    public class Disponible: Campania
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
        public string TelTrabajo { get; set; }
        public string Celular1 { get; set; }
        public float LineaActual { get; set; }
        public float LineaNueva { get; set; }
        public float Incremento { get; set; }
        public string Producto { get; set; }
        public string Ult4DIG { get; set; }
        public string TasaAnual { get; set; }
        public string Cat { get; set; }
        public string FechaCat { get; set; }
        public float MontoMaximo { get; set; }
        public int TipoLlamada { get; set; }
        public string Gepc { get; set; }
        public int PlazoDisponible { get; set; }
        public float MontoDisponible { get; set; }
        public string FechaVenta { get; set; }
        public int Estatus { get; set; }
        public string RFCRVT { get; set; }
        public string FechaInsercion { get; set; }
        public string TelCasa { get; set; }
        public string Celular2 { get; set; }
        public int EstatusVenta { get; set; }
        public string TipoOferta { get; set; }
        public int Bancanet { get; set; }
        public int Adicionales { get; set; }
        public string autentica { get; set; }
        public int NumAdic { get; set; }
        public string FechaVicitaSucursal { get; set; }
    }
}