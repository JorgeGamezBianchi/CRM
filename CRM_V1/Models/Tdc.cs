using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRM_V1.Models
{
    public class Tdc: Campania
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

        public string Folio { get; set; }
        public string Producto { get; set; }
        public int Razon { get; set; }
        public string Comentarios { get; set; }
        public string Telefono { get; set; }
        public string Genero { get; set; }
        public string Id { get; set; }
        public string email { get; set; }
        public string CodigoPostalEmp { get; set; }
        public string ExtencionEmpleo { get; set; }
        public int ComprobanteDomicilio { get; set; }
        public int Institucion1 { get; set; }
        public string FechaVisitaSuc { get; set; }
        public string Division { get; set; }
        public string Regional { get; set; }
        public int IdRvt { get; set; }
        public int PaisNacimiento { get; set; }
        public int EntidadFederativa { get; set; }
        public int PaisNacionalidad { get; set; }
        public int EdoCivil { get; set; }
        public int Escolaridad { get; set; }
        public string NumDependientes { get; set; }
        public int TipoVivienda { get; set; }
        public string AniosResidencia { get; set; }
        public string NomEmp { get; set; }
        public string CalleEmp { get; set; }
        public string NumIntEmp { get; set; }
        public string NumExtEmp { get; set; }
        public string ColoniaEmp { get; set; }
        public string EstadoEmp { get; set; }
        public string DelegacionEmp { get; set; }
        public string Actividad { get; set; }
        public string Ocupacion { get; set; }
        public string TipoEmpleo { get; set; }
        public string TelefonoEmp { get; set; }
        public string Ext { get; set; }
        public string AntiguedadAnios { get; set; }
        public string AntiguedadMeses { get; set; }
        public float IngresoMensual { get; set; }
        public int CompIngresos { get; set; }
        public int TipoIdentificacion { get; set; }
        public int Intitucion1 { get; set; }
        public int TipoCuenta1 { get; set; }
        public int Terminacion1 { get; set; }
        public int Institucion2 { get; set; }
        public int TipoCuenta2 { get; set; }
        public int Terminacion2 { get; set; }
        public int Institucion3 { get; set; }
        public int TipoCuenta3 { get; set; }
        public int Terminacion3 { get; set; }
        public string MaternoRef1 { get; set; }
        public string PaternoRef1 { get; set; }
        public string NombreRef1 { get; set; }
        public int ParentescoRef1 { get; set; }
        public string TelefonoRef1 { get; set; }
        public string ExtRef1 { get; set; }
        public string MaternoRef2 { get; set; }
        public string PaternoRef2 { get; set; }
        public string NombreRef2 { get; set; }
        public int ParentescoRef2 { get; set; }
        public string TelefonoRef2 { get; set; }
        public string ExtRef2 { get; set; }
        public string Sucursal { get; set; }
        public string NumeroSucursal { get; set; }
        public string FolioECS { get; set; }
        public int RefBuro { get; set; }
        public int EstatusAutenticacion { get; set; }

        public int EstatusFrontTMK { get; set; }
        public int EstatusFrontTMK2 { get; set; } //Actualizacion 21 de marzo del 2019

        public string CausaDeclinacion { get; set; }
        public int EstatusDeclinacion { get; set; }
        public string TelefonoProc { get; set; }
        public int TipoPersona { get; set; }
        public int TipoTargeta { get; set; }
        public int TipoTargetaBancaria { get; set; }
        public int TipoTargetaDepartamental { get; set; }
        public int TipoTargetaComercial { get; set; }
        public int SinTDC { get; set; }
        public int TipoRecibidosNomina { get; set; }
        public int TipoEstadoCuenta { get; set; }
        public int LineaCredito { get; set; }
        public string Linea_Credito { get; set; }
        public int Antiguedad { get; set; }
        public int Ingresos { get; set; }
        public int Buro { get; set; }
        public int EstatusFinal { get; set; }
        public int ProcesoPendiente { get; set; }
        public int Canceladas { get; set; }
        public string ComentariosProc { get; set; }
        public string RFCRVT { get; set; }
        public string FechaInsercion { get; set; }
        public string FechaActualizacion { get; set; }
        public int EstatusVenta { get; set; }
        public string Curp { get; set; }
        public string NombreEmpresa { get; set; }
        public string ExtensionReferencia1 { get; set; }
        public string ExtensionReferencia2 { get; set; }
        public string NumSucursal { get; set; }
        //public string CURP { get; set; }

        public string EstadoSuc { get; set; }
        public string MunicipioSuc { get; set; }
        public string Tel_Contacto { get; set; } //Modificacion 08/02/2022
        public string FechaCAT_TDC { get; set; }
    }
}