using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRM_V1.Models
{
    public class Cli: Campania
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
        public string NumeroTargeta { get; set; }
        public string Producto { get; set; }
        public int LineaAtual { get; set; }
        public int IncrementoLinea { get; set; }
        public int LineaNuevaTotal { get; set; }
        public int BancaElectronica { get; set; }
        public int TieneAdicionales { get; set; }
        public string Autenticacion { get; set; }
        public string RFCRVT { get; set; }
        public int IdPlaza { get; set; }
        public string Piso { get; set; }
        public string ClienteDesde { get; set; }
        public string FechaInsercion { get; set; }
        public int EstatusVenta { get; set; }
        public string Autentica { get; set; }
        public int Num_adicionales { get; set; }
        public int Calificacion { get; set; }
    }
}