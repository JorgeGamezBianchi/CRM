using CRM_V1.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace CRM_V1.Controllers
{
    public class ClientController : Controller
    {
        public JsonResult ToJson(Object obj)
        {
            //return null;
            return Json(obj, JsonRequestBehavior.AllowGet);
        }

        public ActionResult OpenPdf(string id)
        {
            ViewBag.Id = id;
            return View("~/Views/Home/PdfView.cshtml");
        }

        [HttpGet]
        public Object LoadEstatus()
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                List<EstatusVenta> estatusVentas = new List<EstatusVenta>();
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("ESTATUS_VENTA", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader dataReader = cmd.ExecuteReader();

                    while (dataReader.Read())
                    {
                        estatusVentas.Add(new EstatusVenta
                        {
                            Valor = dataReader["Valor"].ToString(),
                            Texto = dataReader["Texto"].ToString()
                        });
                    }
                    dataReader.Close();
                    cmd = null;
                }
                return ToJson(estatusVentas);
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }
        }

        public Object Catalogos(EstatusVenta estatus)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                List<EstatusVenta> estatusVentas = new List<EstatusVenta>();
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("uspQ_CombosCatalogos", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@id_campana", estatus.Valor);
                    cmd.Parameters.AddWithValue("@catalogo", estatus.Texto);
                    SqlDataReader dataReader = cmd.ExecuteReader();

                    while (dataReader.Read())
                    {
                        estatusVentas.Add(new EstatusVenta
                        {
                            Valor = dataReader["Valor"].ToString(),
                            Texto = dataReader["Texto"].ToString()
                        });
                    }
                    dataReader.Close();
                    cmd = null;
                }
                return ToJson(estatusVentas);
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }

        }


        public Object Calificaciones(EstatusVenta estatus)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                List<EstatusVenta> estatusVentas = new List<EstatusVenta>();
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("[uspQ_Calificaciones]", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@id_campana", estatus.Valor);
                    cmd.Parameters.AddWithValue("@catalogo", estatus.Texto);
                    SqlDataReader dataReader = cmd.ExecuteReader();

                    while (dataReader.Read())
                    {
                        estatusVentas.Add(new EstatusVenta
                        {
                            Valor = dataReader["Valor"].ToString(),
                            Texto = dataReader["Texto"].ToString()
                        });
                    }
                    dataReader.Close();
                    cmd = null;
                }
                return ToJson(estatusVentas);
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }

        }
        public List<Direccion> SearchDirection(string id)
        {
            string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
            List<Direccion> listaDireccion = new List<Direccion>();
            using (SqlConnection con = new SqlConnection(cadString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("COLONIASCP", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@CP", id);
                SqlDataReader dataReader = cmd.ExecuteReader();
                while (dataReader.Read())
                {
                    listaDireccion.Add(new Direccion
                    {
                        idCodigo = dataReader["idCodigo"].ToString(),
                        Estado = dataReader["Estado"].ToString(),
                        DelMun = dataReader["DelMun"].ToString(),
                        Colonia = dataReader["Colonia"].ToString(),
                        //ClaveEstado = dataReader["ClaveEstado"].ToString(),
                        //ClaveDelMun = dataReader["ClaveDelMun"].ToString()
                    });
                }
                dataReader.Close();
                cmd = null;
            }
            return listaDireccion;
        }

        public Object FindDireccion(string id)
        {
            try
            {
                return ToJson(SearchDirection(id));
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }

        }

        public Object FindEstados()
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                List<EstatusVenta> listaDireccion = new List<EstatusVenta>();
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("estados", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader dataReader = cmd.ExecuteReader();

                    while (dataReader.Read())
                    {
                        listaDireccion.Add(new EstatusVenta
                        {
                            Valor = dataReader["ClaveEstado"].ToString(),
                            Texto = dataReader["Estado"].ToString()
                        });
                    }
                    dataReader.Close();
                    cmd = null;
                }
                //return JsonConvert.SerializeObject(listaDireccion);
                return ToJson(listaDireccion);
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }

        }

        public Object FindLoadBranchOfficeForSirh(string id)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                Sucursal sucursal = null;
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("FindLoadBranchOfficeForSirh", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@SIRH", id);
                    SqlDataReader dataReader = cmd.ExecuteReader();

                    while (dataReader.Read())
                    {
                        sucursal = new Sucursal
                        {
                            SIRH = dataReader["SIRH"].ToString(),
                            NOMBRE_DISPOSITIVO = dataReader["NOMBRE DISPOSITIVO"].ToString(),
                            DIVISION = dataReader["DIVISION"].ToString(),
                            DIRECCION = dataReader["DIRECCION"].ToString(),
                            DOMICILIO = dataReader["DOMICILIO"].ToString(),
                            COLONIA = dataReader["COLONIA"].ToString(),
                            CALLE1 = dataReader["CALLE 1"].ToString(),
                            CALLE2 = dataReader["CALLE 2"].ToString(),
                            DELEG_MUNIC = dataReader["DELEG_MUNIC"].ToString(),
                            CP = dataReader["CP"].ToString(),
                            LUNES_VIERNES_AP = dataReader["LUNES A VIERNES AP"].ToString(),
                            LUNES_VIERNES_CIE = dataReader["LUNES A VIERNES CIE"].ToString(),
                            SABADOS_AP = dataReader["SABADOS AP"].ToString(),
                            SABADOS_CIE = dataReader["SABADOS CIE"].ToString(),
                        };
                    }
                    dataReader.Close();
                    cmd = null;
                }
                return ToJson(sucursal);
            }
            catch (Exception ex)
            {
                //return View("~/Views/Shared/Error.cshml");
                return "Error: " + ex;
            }
        }

        public Object FinloadBranchOffice(EstatusVenta parameters)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                List<Sucursal> listaDireccion = new List<Sucursal>();
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("loadBranchOffice", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Municipality", parameters.Valor);
                    cmd.Parameters.AddWithValue("@IsSaturday", parameters.Texto);
                    SqlDataReader dataReader = cmd.ExecuteReader();

                    while (dataReader.Read())
                    {
                        listaDireccion.Add(new Sucursal
                        {
                            SIRH = dataReader["SIRH"].ToString(),
                            NOMBRE_DISPOSITIVO = dataReader["NOMBRE DISPOSITIVO"].ToString(),
                            DIVISION = dataReader["DIVISION"].ToString(),
                            DIRECCION = dataReader["DIRECCION"].ToString(),
                            DOMICILIO = dataReader["DOMICILIO"].ToString(),
                            COLONIA = dataReader["COLONIA"].ToString(),
                            CALLE1 = dataReader["CALLE 1"].ToString(),
                            CALLE2 = dataReader["CALLE 2"].ToString(),
                            DELEG_MUNIC = dataReader["DELEG_MUNIC"].ToString(),
                            CP = dataReader["CP"].ToString(),
                            LUNES_VIERNES_AP = dataReader["LUNES A VIERNES AP"].ToString(),
                            LUNES_VIERNES_CIE = dataReader["LUNES A VIERNES CIE"].ToString(),
                            SABADOS_AP = dataReader["SABADOS AP"].ToString(),
                            SABADOS_CIE = dataReader["SABADOS CIE"].ToString(),
                        });
                    }
                    dataReader.Close();
                    cmd = null;
                }
                return ToJson(listaDireccion);
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }

        }
        //modificacion 11/02/2022
        //Sucursales autorizadas para hipotecario
        public Object FinloadBranchOffice_Hipo(EstatusVenta parameters)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                List<Sucursal> listaDireccion = new List<Sucursal>();
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("loadBranchOffice_Hipo", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Municipality", parameters.Valor);
                    cmd.Parameters.AddWithValue("@IsSaturday", parameters.Texto);
                    SqlDataReader dataReader = cmd.ExecuteReader();

                    while (dataReader.Read())
                    {
                        listaDireccion.Add(new Sucursal
                        {
                            SIRH = dataReader["SIRH"].ToString(),
                            NOMBRE_DISPOSITIVO = dataReader["NOMBRE DISPOSITIVO"].ToString(),
                            DIVISION = dataReader["DIVISION"].ToString(),
                            DIRECCION = dataReader["DIRECCION"].ToString(),
                            DOMICILIO = dataReader["DOMICILIO"].ToString(),
                            COLONIA = dataReader["COLONIA"].ToString(),
                            CALLE1 = dataReader["CALLE 1"].ToString(),
                            CALLE2 = dataReader["CALLE 2"].ToString(),
                            DELEG_MUNIC = dataReader["DELEG_MUNIC"].ToString(),
                            CP = dataReader["CP"].ToString(),
                            LUNES_VIERNES_AP = dataReader["LUNES A VIERNES AP"].ToString(),
                            LUNES_VIERNES_CIE = dataReader["LUNES A VIERNES CIE"].ToString(),
                            SABADOS_AP = dataReader["SABADOS AP"].ToString(),
                            SABADOS_CIE = dataReader["SABADOS CIE"].ToString(),
                        });
                    }
                    dataReader.Close();
                    cmd = null;
                }
                return ToJson(listaDireccion);
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }

        }

        public Object FindMunicipiosEstado(string id)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                List<EstatusVenta> listaDireccion = new List<EstatusVenta>();
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("ALLMUNICIPIOSESTADO", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@ID_ESTADO", id);
                    SqlDataReader dataReader = cmd.ExecuteReader();

                    while (dataReader.Read())
                    {
                        listaDireccion.Add(new EstatusVenta
                        {
                            Valor = dataReader["ClaveDelMun"].ToString(),
                            Texto = dataReader["DelMun"].ToString()
                        });
                    }
                    dataReader.Close();
                    cmd = null;
                }
                return ToJson(listaDireccion);
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }

        }

        public Object FindColoniasMunicipio(string id)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                List<EstatusVenta> listaDireccion = new List<EstatusVenta>();
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("ALLCOLONIASMUNICPIO", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@ID_MUNICIPIO", id);
                    SqlDataReader dataReader = cmd.ExecuteReader();

                    while (dataReader.Read())
                    {
                        listaDireccion.Add(new EstatusVenta
                        {
                            Valor = dataReader["IdCodigo"].ToString(),
                            Texto = dataReader["Colonia"].ToString()
                        });
                    }
                    dataReader.Close();
                    cmd = null;
                }
                return ToJson(listaDireccion);
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }

        }

        private TipoUsuario TypeUser(string Type)
        {
            switch (Type)
            {
                case "SUPERVISOR": return TipoUsuario.SUPERVISOR;
                case "COORDINADOR": return TipoUsuario.COORDINADOR;
                case "RVT": return TipoUsuario.RVT;
                case "PROCESOS": return TipoUsuario.PROCESOS;
                case "LIBERADOS": return TipoUsuario.LIBERADOS;
                case "VALIDACION": return TipoUsuario.VALIDACION;
                case "GERENCIA": return TipoUsuario.GERENCIA;
                case "RESPONCE": return TipoUsuario.RESPONCE;
                case "OTRO": return TipoUsuario.OTRO;
                case "SISTEMAS": return TipoUsuario.SISTEMAS;
                case "CAPACITACION": return TipoUsuario.CAPACITACION;
                default: return TipoUsuario.NINGUNO;
            }
        }

        [HttpGet]
        public Object FindDataClient(string id)
        {
            //try
            //{
            DatosCliente datosCliente = new DatosCliente();
            bool ban = false;

            TipoUsuario Tipo = TypeUser(Session["Tipo"].ToString());
            if (Tipo == TipoUsuario.RVT)
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                datosCliente.Campanias = new List<Campania>();
                using (SqlConnection conn = new SqlConnection(cadString))
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("uspQ_ClienteDatos", conn)
                    {
                        CommandType = CommandType.StoredProcedure
                    };
                    cmd.Parameters.AddWithValue("@NUMERO_CLIENTE", id);
                    SqlDataReader dataReader = cmd.ExecuteReader();
                    if (!dataReader.HasRows)
                    {
                        return ToJson("No hay registros");
                    }
                    dataReader.Read();
                    datosCliente.NumeroCliente = dataReader["NUMERO_CLIENTE"].ToString();

                    #region "19032019"
                    //string[] noms = dataReader["NOMBRES"].ToString().Split(' ');
                    //if (noms.Length > 2)
                    //{
                    //    datosCliente.ApellidoMaterno = noms[noms.Length - 1];
                    //    datosCliente.ApellidoPaterno = noms[noms.Length - 2];

                    //    string aux = "";
                    //    for (int i = 0; i < noms.Length - 2; i++)
                    //    {
                    //        aux += datosCliente.Nombre + noms[i] + " ";
                    //    }
                    //    datosCliente.Nombre = aux;
                    //}

                    //else
                    //{}

                    datosCliente.Nombre = dataReader["NOMBRES"].ToString();
                    datosCliente.ApellidoPaterno = dataReader["APELLIDO_PATERNO"].ToString();
                    datosCliente.ApellidoMaterno = dataReader["APELLIDO_MATERNO"].ToString();

                    #endregion

                    datosCliente.FechaNacimiento = dataReader["FECHA_NACIMIENTO"].ToString();
                    datosCliente.RFC = dataReader["RFC"].ToString();
                    if (datosCliente.RFC == null || datosCliente.RFC.Equals(""))
                    {
                        datosCliente.RFC = ClassRFC.GeneraRFC(datosCliente.Nombre, datosCliente.ApellidoPaterno,
                            datosCliente.ApellidoMaterno, datosCliente.FechaNacimiento);
                    }
                    datosCliente.Calle = dataReader["CALLE"].ToString();
                    datosCliente.NumeroExterior = dataReader["NumeroExterior"].ToString();
                    datosCliente.NumeroInterior = dataReader["NumeroInterior"].ToString();
                    datosCliente.CodigoPostal = dataReader["CP"].ToString();
                    datosCliente.Estado = dataReader["ESTADO"].ToString();
                    datosCliente.Municipio = dataReader["MUNICIPIO"].ToString();
                    datosCliente.Colonia = dataReader["COLONIA"].ToString();

                    //buscar estado, municipio y colonia con base a cp
                    if (datosCliente.Estado.Equals("0") && datosCliente.Municipio.Equals("0"))
                    {
                        List<Direccion> listaDirecciones = SearchDirection(datosCliente.CodigoPostal);
                        if (listaDirecciones.Count > 0)
                        {
                            datosCliente.Estado = listaDirecciones[0].ClaveEstado;
                            datosCliente.Municipio = listaDirecciones[0].ClaveDelMun;
                        }
                    }

                    datosCliente.Celular = dataReader["CEL_1"].ToString();
                    datosCliente.TelefonoCasa = dataReader["TEL_1"].ToString();

                    try
                    {
                        Int64.Parse(datosCliente.Estado);
                    }
                    catch (Exception)
                    {
                        datosCliente.Estado = "0";
                    }

                    try
                    {
                        Int64.Parse(datosCliente.Municipio);
                    }
                    catch (Exception)
                    {
                        datosCliente.Municipio = "0";
                    }

                    try
                    {
                        Int64.Parse(datosCliente.Colonia);
                    }
                    catch (Exception)
                    {
                        datosCliente.Colonia = "0";
                    }
                }
                ban = true;
            }

            //obtener los datos de las campanias con las que trabaja el cliente
            CampaniasController cc = new CampaniasController();
            datosCliente.Campanias = new List<Campania>();
            Balcon balcon = (Balcon)cc.FindBalcon(id);
            UserController.Tipo = TypeUser(Session["Tipo"].ToString());
            if (balcon != null)
            {
                balcon.NombreCampania = "BALCON";
                datosCliente.Campanias.Add(balcon);
                balcon = null;
                if (!ban)
                {
                    //obtener datos generales
                    FindGeneralData(datosCliente, id, "BALCON");
                    if (datosCliente.Nombre != null)
                    {
                        ban = true;
                    }
                }
            }
            Cli cli = (Cli)cc.FindCli(id);
            if (cli != null)
            {
                cli.NombreCampania = "CLI";
                datosCliente.Campanias.Add(cli);
                cli = null;
                if (!ban)
                {
                    //obtener datos genrales
                    FindGeneralData(datosCliente, id, "CLI");
                    if (datosCliente.Nombre != null)
                    {
                        ban = true;
                    }
                }
            }

            Cnc cnc = (Cnc)cc.FindCNC(id);
            if (cnc != null)
            {
                cnc.NombreCampania = "CNC";
                datosCliente.Campanias.Add(cnc);
                cnc = null;

                if (!ban)
                {
                    //obtener datos generales
                    FindGeneralData(datosCliente, id, "CNC");
                    if (datosCliente.Nombre != null)
                    {
                        ban = true;
                    }
                }
            }
            Hipotecario HIPO = (Hipotecario)cc.FindHipo(id);
            if (HIPO != null)
            {
                HIPO.NombreCampania = "HIPOTECARIO";
                datosCliente.Campanias.Add(HIPO);
                HIPO = null;

                if (!ban)
                {
                    //obtener datos generales
                    FindGeneralData(datosCliente, id, "HIPO");
                    if (datosCliente.Nombre != null)
                    {
                        ban = true;
                    }
                }
            }
            Cpc cpc = (Cpc)cc.FindCPC(id);
            if (cpc != null)
            {
                cpc.NombreCampania = "CPC";
                datosCliente.Campanias.Add(cpc);
                cpc = null;

                if (!ban)
                {
                    //obtener datos generales
                    FindGeneralData(datosCliente, id, "CPC");
                    if (datosCliente.Nombre != null)
                    {
                        ban = true;
                    }
                }
            }

            Pagare pagare = (Pagare)cc.FindPagare(id);
            if (pagare != null)
            {
                pagare.NombreCampania = "PAGARE";
                datosCliente.Campanias.Add(pagare);
                pagare = null;

                if (!ban)
                {
                    //obtener datos generales
                    FindGeneralData(datosCliente, id, "PAGARE");
                    if (datosCliente.Nombre != null)
                    {
                        ban = true;
                    }
                }
            }
            //Campaña agregada el 11/02/2022
            Fondos fondos = (Fondos)cc.FindFondos(id);
            if (fondos != null)
            {
                fondos.NombreCampania = "FONDOS";
                datosCliente.Campanias.Add(fondos);
                fondos = null;

                if (!ban)
                {
                    //obtener datos generales
                    FindGeneralData(datosCliente, id, "FONDOS");
                    if (datosCliente.Nombre != null)
                    {
                        ban = true;
                    }
                }
            }

            Disponible disponible = (Disponible)cc.FindDISPONIBLE(id);
            if (disponible != null)
            {
                disponible.NombreCampania = "DISPONIBLE";
                datosCliente.Campanias.Add(disponible);
                disponible = null;

                if (!ban)
                {
                    //obtener datos generales
                    FindGeneralData(datosCliente, id, "DISPONIBLE");
                    if (datosCliente.Nombre != null)
                    {
                        ban = true;
                    }
                }
            }

            Pyme pyme = (Pyme)cc.FindPYME(id);
            if (pyme != null)
            {
                pyme.NombreCampania = "PYME";
                datosCliente.Campanias.Add(pyme);
                pyme = null;

                if (!ban)
                {
                    //obtener datos generales
                    FindGeneralData(datosCliente, id, "PYME");
                    if (datosCliente.Nombre != null)
                    {
                        ban = true;
                    }
                }
            }


            Redisposicion redisposicion = (Redisposicion)cc.FindREDISPOSICION(id);
            if (redisposicion != null)
            {
                redisposicion.NombreCampania = "REDISPOSICION";
                datosCliente.Campanias.Add(redisposicion);
                redisposicion = null;

                if (!ban)
                {
                    //obtener datos generales
                    FindGeneralData(datosCliente, id, "REDISPOSICION");
                    if (datosCliente.Nombre != null)
                    {
                        ban = true;
                    }
                }
            }

            ICollection<Object> tdcs = cc.FindTDC(id);
            if (tdcs != null)
            {
                foreach (Tdc item in tdcs)
                {
                    switch (item.Id)
                    {
                        case "26"://
                            item.NombreCampania = "TDC_PAS";
                            break;
                        case "32"://
                            item.NombreCampania = "TDC_PAP_AAC";
                            break;
                        case "30"://
                            item.NombreCampania = "TDC_PROSPECTOR";
                            break;
                        case "41"://
                            item.NombreCampania = "INACTIVOS";
                            break;
                    }
                    datosCliente.Campanias.Add(item);
                }
                if (!ban)
                {
                    //obtener datos generales
                    FindGeneralData(datosCliente, id, "TDC");
                    if (datosCliente.Nombre != null)
                    {
                        ban = true;
                    }
                }
            }
            return ToJson(datosCliente);
            //}
            //catch (Exception)
            //{
            //    return View("~/Views/Shared/Error.cshml");
            //}
        }

        private void FindGeneralData(DatosCliente datosCliente, string ClientNumber, string Table)
        {
            string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
            using (SqlConnection conn = new SqlConnection(cadString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("GENERAL_DATA", conn)
                {
                    CommandType = CommandType.StoredProcedure
                };
                cmd.Parameters.AddWithValue("@CLIENT_NUMBER", ClientNumber);
                cmd.Parameters.AddWithValue("@TABLE", Table);
                SqlDataReader dataReader = cmd.ExecuteReader();
                if (dataReader.HasRows)
                {
                    dataReader.Read();

                    //extraer los datos  ApellidoPaterno
                    datosCliente.NumeroCliente = dataReader["NUMERO_CLIENTE"].ToString();
                    datosCliente.Nombre = dataReader["NOMBRE_COMPLETO"].ToString();
                    datosCliente.ApellidoPaterno = dataReader["APELLIDO_PATERNO"].ToString();
                    datosCliente.ApellidoMaterno = dataReader["APELLIDO_MATERNO"].ToString();
                    datosCliente.FechaNacimiento = dataReader["FECHA_NACIMIENTO"].ToString();
                    datosCliente.RFC = dataReader["RFC"].ToString();
                    if (datosCliente.RFC == null || datosCliente.RFC.Equals(""))
                    {
                        datosCliente.RFC = ClassRFC.GeneraRFC(datosCliente.Nombre, datosCliente.ApellidoPaterno,
                            datosCliente.ApellidoMaterno, datosCliente.FechaNacimiento);
                    }
                    datosCliente.Calle = dataReader["CALLE"].ToString();
                    datosCliente.NumeroExterior = dataReader["NUMERO_EXTERIOR"].ToString();
                    datosCliente.NumeroInterior = dataReader["NUMERO_INTERIOR"].ToString();
                    datosCliente.CodigoPostal = dataReader["CODIGO_POSTAL"].ToString();
                    datosCliente.Colonia = dataReader["COLONIA"].ToString();
                    datosCliente.Estado = dataReader["ESTADO"].ToString();
                    datosCliente.Municipio = dataReader["MUNICIPIO"].ToString();
                    datosCliente.Celular = dataReader["CELULAR"].ToString();
                    datosCliente.TelefonoCasa = dataReader["TELEFONO_CASA"].ToString();

                    try
                    {
                        Int64.Parse(datosCliente.Estado);
                    }
                    catch (Exception)
                    {
                        datosCliente.Estado = "0";
                    }

                    try
                    {
                        Int64.Parse(datosCliente.Municipio);
                    }
                    catch (Exception)
                    {
                        datosCliente.Municipio = "0";
                    }

                    try
                    {
                        Int64.Parse(datosCliente.Colonia);
                    }
                    catch (Exception)
                    {
                        datosCliente.Colonia = "0";
                    }
                }
                dataReader.Close();
            }
        }



        //guardado de datos


        public Object saveCalificacion(MOcalificaciones mocalif)
        {
            TipoUsuario Tipo;
            CampaniasController cc = new CampaniasController();
            Tipo = TypeUser(Session["Tipo"].ToString());
            if (Tipo == TipoUsuario.VALIDACION)
            {
                return ToJson(cc.SaveCalif(mocalif.Folio, mocalif.NumeroCliente, mocalif.Calificacion));
            }
            else if (Tipo == TipoUsuario.RVT)
            {
                return ToJson(cc.SaveCalif(mocalif.Folio, mocalif.NumeroCliente, mocalif.Calificacion));
            }
            return null;
        }


        public Object SaveBalconData(Balcon balcon)
        {
            //try
            //{
                long IdUser;
                long IdValidador;
                TipoUsuario Tipo;
                CampaniasController cc = new CampaniasController();
                Tipo = TypeUser(Session["Tipo"].ToString());
                if (Tipo == TipoUsuario.VALIDACION)
                {
                    IdValidador = int.Parse(Session["IdValidador"].ToString());
                    Session["Tipo"] = TipoUsuario.RVT;
                    return ToJson(cc.SaveBALCON(balcon, 2, IdValidador));
                }
                else if (Tipo == TipoUsuario.RVT)
                {
                    IdUser = int.Parse(Session["IdUser"].ToString());
                    return ToJson(cc.SaveBALCON(balcon, 1, IdUser));
                }
                return null;
            //}
            //catch (Exception)
            //{
            //    return View("~/Views/Shared/Error.cshml");
            //}

        }

        public Object SaveCliData(Cli cli)
        {
            //try
            //{
                //long IdUser;
                long IdValidador;
                long idRVT;
                TipoUsuario Tipo;
                Tipo = TypeUser(Session["Tipo"].ToString());
                CampaniasController cc = new CampaniasController();
                //if (Tipo == TipoUsuario.VALIDACION)
                //{
                IdValidador = int.Parse(Session["IdValidador"].ToString());
                idRVT = int.Parse(Session["IdUser"].ToString()); ;
                Session["Tipo"] = TipoUsuario.RVT;
                return ToJson(cc.SaveCLI(cli, IdValidador,idRVT));
                //}
                //else if (Tipo == TipoUsuario.RVT)
                //{
                //    IdUser = int.Parse(Session["IdUser"].ToString());
                //    return ToJson(cc.SaveCLI(cli, 1, IdUser));
                //}
                //return null;
            //}
            //catch (Exception)
            //{
            //    return View("~/Views/Shared/Error.cshml");
            //}


        }

        public Object SaveCncData(Cnc datosCliente)
        {
            try
            {
                long IdUser;
                long IdValidador;
                TipoUsuario Tipo;
                Tipo = TypeUser(Session["Tipo"].ToString());
                CampaniasController cc = new CampaniasController();
                if (Tipo == TipoUsuario.VALIDACION)
                {
                    IdValidador = int.Parse(Session["IdValidador"].ToString());
                    Session["Tipo"] = TipoUsuario.RVT;
                    if (datosCliente.SeleccionaVentaCNC != "Sucursal")
                    {
                        datosCliente.Sucursal = "";
                        datosCliente.DirRegional = "";
                        datosCliente.NumeroSucursal = "";
                        datosCliente.EstadoSucursal = "";
                        datosCliente.MunicipioSucursal = "";
                        datosCliente.NumeroSucursal = "";
                        datosCliente.Division = "";
                        datosCliente.FechaVicitaSucursal = "1900-01-01";
                    }
                    return ToJson(cc.SaveCNC(datosCliente, 2, IdValidador));
                }
                else if (Tipo == TipoUsuario.RVT)
                {
                    IdUser = int.Parse(Session["IdUser"].ToString());
                    if (datosCliente.SeleccionaVentaCNC != "Sucursal")
                    {
                        datosCliente.Sucursal = "";
                        datosCliente.DirRegional = "";
                        datosCliente.NumeroSucursal = "";
                        datosCliente.EstadoSucursal = "";
                        datosCliente.MunicipioSucursal = "";
                        datosCliente.NumeroSucursal = "";
                        datosCliente.Division = "";
                        datosCliente.FechaVicitaSucursal = "1900-01-01";
                    }
                    return ToJson(cc.SaveCNC(datosCliente, 1, IdUser));
                }
                return null;
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }

        }

        public Object SaveCpcData(Cpc datosCliente)
        {
            try
            {
                long IdUser;
                long IdValidador;
                TipoUsuario Tipo;
                Tipo = TypeUser(Session["Tipo"].ToString());
                CampaniasController cc = new CampaniasController();
                if (Tipo == TipoUsuario.VALIDACION || Tipo == TipoUsuario.PROCESOS)
                {
                    IdValidador = int.Parse(Session["IdValidador"].ToString());
                    Session["Tipo"] = TipoUsuario.RVT;
                    if (datosCliente.SeleccionaVenta != "Sucursal")
                    {
                        datosCliente.Sucursal = "";
                        datosCliente.Regional = "";
                        datosCliente.NumeroSucursal = "";
                        datosCliente.EstadoSucursal = "";
                        datosCliente.MunicipioSucursal = "";
                        datosCliente.NumeroSucursal = "";
                        datosCliente.Division = "";
                        datosCliente.FechaVicitaSucursal = "1900-01-01";
                    }
                    return ToJson(cc.SaveCPC(datosCliente, 2, IdValidador));
                }
                else if (Tipo == TipoUsuario.RVT)
                {
                    IdUser = int.Parse(Session["IdUser"].ToString());
                    if (datosCliente.SeleccionaVenta != "Sucursal")
                    {
                        datosCliente.Sucursal = "";
                        datosCliente.Regional = "";
                        datosCliente.NumeroSucursal = "";
                        datosCliente.EstadoSucursal = "";
                        datosCliente.MunicipioSucursal = "";
                        datosCliente.NumeroSucursal = "";
                        datosCliente.Division = "";
                        datosCliente.FechaVicitaSucursal = "1900-01-01";
                    }
                    return ToJson(cc.SaveCPC(datosCliente, 1, IdUser));
                }
                return null;
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }
        }

        public Object SavePagareData(Pagare datosCliente)
        {
            //try
            //{
                long IdUser;
                long IdValidador;
                TipoUsuario Tipo;
                Tipo = TypeUser(Session["Tipo"].ToString());
                CampaniasController cc = new CampaniasController();
                if (Tipo == TipoUsuario.VALIDACION)
                {
                    IdValidador = int.Parse(Session["IdValidador"].ToString());
                    Session["Tipo"] = TipoUsuario.RVT;
                    return ToJson(cc.SavePAGARE(datosCliente, 2, IdValidador));
                }
                else if (Tipo == TipoUsuario.RVT)
                {
                    IdUser = int.Parse(Session["IdUser"].ToString());
                    return ToJson(cc.SavePAGARE(datosCliente, 1, IdUser));
                }
                return null;
            //}
            //catch (Exception)
            //{
            //    return View("~/Views/Shared/Error.cshml");
            //}
        }
        //Camapaña agregada 11/02/2022
        public Object SaveFondosData(Fondos datosCliente)
        {
            //try
            //{
                long IdUser;
                long IdValidador;
                TipoUsuario Tipo;
                Tipo = TypeUser(Session["Tipo"].ToString());
                CampaniasController cc = new CampaniasController();
                if (Tipo == TipoUsuario.VALIDACION)
                {
                    IdValidador = int.Parse(Session["IdValidador"].ToString());
                    Session["Tipo"] = TipoUsuario.RVT;
                    return ToJson(cc.SaveFondos(datosCliente, 2, IdValidador));
                }
                else if (Tipo == TipoUsuario.RVT)
                {
                    IdUser = int.Parse(Session["IdUser"].ToString());
                    return ToJson(cc.SaveFondos(datosCliente, 1, IdUser));
                }
                return null;
            //}
            //catch (Exception)
            //{
            //    return View("~/Views/Shared/Error.cshml");
            //}
        }

        public Object SavePymeData(Pyme datosCliente)
        {
            try
            {
                long IdUser;
                long IdValidador;
                TipoUsuario Tipo;
                Tipo = TypeUser(Session["Tipo"].ToString());
                CampaniasController cc = new CampaniasController();
                if (Tipo == TipoUsuario.VALIDACION)
                {
                    IdValidador = int.Parse(Session["IdValidador"].ToString());
                    Session["Tipo"] = TipoUsuario.RVT;
                    return ToJson(cc.SavePYME(datosCliente, 2, IdValidador));
                }
                else if (Tipo == TipoUsuario.RVT)
                {
                    IdUser = int.Parse(Session["IdUser"].ToString());
                    return ToJson(cc.SavePYME(datosCliente, 1, IdUser));
                }
                return null;
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }
        }

        public Object SaveDisponibleData(Disponible datosCliente)
        {
            //try
            //{
                long IdUser;
                long IdValidador;
                TipoUsuario Tipo;
                Tipo = TypeUser(Session["Tipo"].ToString());
                CampaniasController cc = new CampaniasController();
                if (Tipo == TipoUsuario.VALIDACION)
                {
                    IdValidador = int.Parse(Session["IdValidador"].ToString());
                    Session["Tipo"] = TipoUsuario.RVT;
                    return ToJson(cc.SaveDISPONIBLE(datosCliente, 2, IdValidador));
                }
                else if (Tipo == TipoUsuario.RVT)
                {
                    IdUser = int.Parse(Session["IdUser"].ToString());
                    Object obj = cc.SaveDISPONIBLE(datosCliente, 1, IdUser);
                    return ToJson(obj);
                }
                return null;
            //}
            //catch (Exception)
            //{
            //    return View("~/Views/Shared/Error.cshml");
            //}

        }

        public Object SaveHIPOData(Hipotecario datosCliente)
        {

            long IdUser;
            long IdValidador;
            TipoUsuario Tipo;
            Tipo = TypeUser(Session["Tipo"].ToString());
            CampaniasController cc = new CampaniasController();
            if (Tipo == TipoUsuario.VALIDACION)
            {
                IdValidador = int.Parse(Session["IdValidador"].ToString());
                Session["Tipo"] = TipoUsuario.RVT;
                return ToJson(cc.SaveHIPO(datosCliente, 2, IdValidador));
            }
            else if (Tipo == TipoUsuario.RVT)
            {
                IdUser = int.Parse(Session["IdUser"].ToString());
                return ToJson(cc.SaveHIPO(datosCliente, 1, IdUser));
            }
            return null;


        }

        public Object SaveRedisposicionData(Redisposicion datosCliente)
        {
            try
            {
                long IdUser;
                long IdValidador;
                TipoUsuario Tipo;
                Tipo = TypeUser(Session["Tipo"].ToString());
                CampaniasController cc = new CampaniasController();
                if (Tipo == TipoUsuario.VALIDACION)
                {
                    IdValidador = int.Parse(Session["IdValidador"].ToString());
                    Session["Tipo"] = TipoUsuario.RVT;
                    return ToJson(cc.SaveREDISPOSICION(datosCliente, 2, IdValidador));
                }
                else if (Tipo == TipoUsuario.RVT)
                {
                    IdUser = int.Parse(Session["IdUser"].ToString());
                    return ToJson(cc.SaveREDISPOSICION(datosCliente, 1, IdUser));
                }
                return null;
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }

        }

        public Object SaveTdc(Tdc datosCliente)
        {
            try
            {
                long IdUser;
                long IdValidador;
                TipoUsuario Tipo;
                Tipo = TypeUser(Session["Tipo"].ToString());
                CampaniasController cc = new CampaniasController();
                if (Tipo == TipoUsuario.PROCESOS)
                {
                    IdValidador = int.Parse(Session["IdValidador"].ToString());
                    Session["Tipo"] = TipoUsuario.RVT;
                    return ToJson(cc.SaveTDC(datosCliente, 2, IdValidador));
                }
                else
                {
                    IdUser = int.Parse(Session["IdUser"].ToString());
                    return ToJson(cc.SaveTDC(datosCliente, 1, IdUser));
                }
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }
        }

        public Object ListaEstado()
        {
            try
            {
                LinkedList<Estado> ListaEstadoss = new LinkedList<Estado>();
                string cs = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                using (SqlConnection cnn = new SqlConnection(cs))
                {
                    cnn.Open();
                    SqlCommand cmd = new SqlCommand("estados", cnn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        ListaEstadoss.AddLast(new Estado
                        {
                            Id = rdr["Valor"].ToString(),
                            Nombre = rdr["Texto"].ToString(),
                            Municipios = new List<Municipio>()
                        });
                    }
                    rdr.Close();
                    foreach (var item in ListaEstadoss)
                    {
                        Estado est = item;
                        SqlCommand cmd1 = new SqlCommand("municipiosEstado", cnn);
                        cmd1.CommandType = CommandType.StoredProcedure;
                        cmd1.Parameters.AddWithValue("@Valor", est.Id);
                        SqlDataReader rdr1 = cmd1.ExecuteReader();

                        while (rdr1.Read())
                        {
                            item.Municipios.Add(new Municipio
                            {
                                Id = long.Parse(rdr1["Id_Municipio"].ToString()),
                                Nombre = rdr1["Texto"].ToString()
                            });
                        }
                        rdr1.Close();
                    }
                    return ToJson(ListaEstadoss);
                }
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }
        }

        public Object ListaAdicionales()
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                List<EstatusVenta> estatusVentas = new List<EstatusVenta>();
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("TieneAdicionales", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader dataReader = cmd.ExecuteReader();

                    while (dataReader.Read())
                    {
                        estatusVentas.Add(new EstatusVenta
                        {
                            Valor = dataReader["Valor"].ToString(),
                            Texto = dataReader["Texto"].ToString()
                        });
                    }
                    dataReader.Close();
                    cmd = null;
                }
                return ToJson(estatusVentas);
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }
        }

        [HttpGet]
        public Object loadTipoLlamada()
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                List<EstatusVenta> estatusVentas = new List<EstatusVenta>();
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("loadTipoLlamada", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader dataReader = cmd.ExecuteReader();

                    while (dataReader.Read())
                    {
                        estatusVentas.Add(new EstatusVenta
                        {
                            Valor = dataReader["Valor"].ToString(),
                            Texto = dataReader["Texto"].ToString()
                        });
                    }
                    dataReader.Close();
                    cmd = null;
                }
                return ToJson(estatusVentas);
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }
        }

        [HttpGet]
        public Object loadBancos()
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                List<EstatusVenta> bancos = new List<EstatusVenta>();
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("uspQ_CombosCatalogos", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@id_campana", 24);
                    cmd.Parameters.AddWithValue("@catalogo", 4);
                    SqlDataReader dataReader = cmd.ExecuteReader();
                    if (dataReader.HasRows)
                    {
                        while (dataReader.Read())
                        {
                            bancos.Add(new EstatusVenta
                            {
                                Valor = dataReader["Valor"].ToString(),
                                Texto = dataReader["Texto"].ToString()
                            });
                        }
                    }
                }
                return ToJson(bancos);
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }
        }

        [HttpGet]
        public Object loadPlazos()
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                List<EstatusVenta> plazos = new List<EstatusVenta>();
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("loadPlazos", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader dataReader = cmd.ExecuteReader();
                    if (dataReader.HasRows)
                    {
                        while (dataReader.Read())
                        {
                            plazos.Add(new EstatusVenta
                            {
                                Valor = dataReader["Valor"].ToString(),
                                Texto = dataReader["Texto"].ToString()
                            });
                        }
                    }
                }
                return ToJson(plazos);
            }
            catch (Exception)
            {
                return View("~/Views/Shared/Error.cshml");
            }
        }
    }
}