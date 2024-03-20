using CRM_V1.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace CRM_V1.Controllers
{
    public class CampaniasController
    {
        //para obtener los datos de cada campaña
        public Object FindBalcon(string ClientNumber)
        {
            string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
            Balcon balcon = null;
            using (SqlConnection con = new SqlConnection(cadString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("uspQ_BALCON_xNoCliente", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@NumCliente", ClientNumber);
                SqlDataReader dataReader = cmd.ExecuteReader();
                if (dataReader.HasRows)
                {
                    dataReader.Read();
                    balcon = new Balcon
                    {
                        Id = int.Parse(dataReader["Id_Campana"].ToString()),
                        Folio = dataReader["Folio"].ToString(),
                        Producto = dataReader["Producto"].ToString(),
                        FechaCat = dataReader["Fecha_cat"].ToString(),
                        TasaAnual = dataReader["Tasa_Anual"].ToString(),
                        Ult4DGT = dataReader["Ult_4_dgt"].ToString(),
                        Cat = dataReader["Cat"].ToString(),
                        TipoLlamada = int.Parse(dataReader["Tipo_llamada"].ToString()),
                        EstatusVenta = int.Parse(dataReader["EstatusVenta"].ToString()),
                        New = dataReader["NEW"].ToString(),
                        FechaVisitaSucursal = dataReader["FechaVisitaSucursal"].ToString(),
                        Sucursal = dataReader["Sucursal"].ToString(),
                        NumeroSucursal = dataReader["NumeroSucursal"].ToString(),
                        EstadoSucursal = dataReader["EstadoB"].ToString(),
                        MunicipioSucursal = dataReader["MunicipioB"].ToString()
                    };
                }
                dataReader.Close();
                con.Close();
            }
            return balcon;
        }

        public Object FindCli(string ClientNumber)
        {
            string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
            Cli cli = null;

            using (SqlConnection con = new SqlConnection(cadString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("uspQ_IncrementoLinea_xNoCliente", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@NumCliente", ClientNumber);
                SqlDataReader dataReader = cmd.ExecuteReader();
                if (dataReader.HasRows)
                {
                    dataReader.Read();
                    cli = new Cli();
                    cli.Id = dataReader["ID_Campana"].ToString();
                    cli.Folio = dataReader["FOLIO"].ToString();
                    cli.Producto = dataReader["Producto"].ToString();
                    cli.IncrementoLinea = int.Parse(dataReader["Linea_incremento"].ToString());
                    cli.LineaAtual = int.Parse(dataReader["Linea_actual"].ToString());
                    cli.LineaNuevaTotal = int.Parse(dataReader["Linea_nueva_total"].ToString());
                    cli.Autenticacion = dataReader["Autenticacion"].ToString();
                    cli.NumeroTargeta = dataReader["Numero_Tarjeta"].ToString();
                    cli.BancaElectronica = int.Parse(dataReader["Banca_electronica"].ToString());
                    cli.TieneAdicionales = int.Parse(dataReader["Tiene_adicionales"].ToString());
                    cli.IdPlaza = int.Parse(dataReader["IdPlaza"].ToString());
                    cli.Piso = dataReader["piso"].ToString();
                    cli.ClienteDesde = dataReader["cliente_desde"].ToString();
                    cli.New = dataReader["NEW"].ToString();
                    cli.EstatusVenta = int.Parse(dataReader["EstatusVenta"].ToString());
                    cli.Num_adicionales = int.Parse(dataReader["Num_Adicionales"].ToString());
                }
                dataReader.Close();
                con.Close();
            }
            return cli;
        }


        public Object FindCNC(string ClientNumber)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                Cnc cnc = null;
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("uspQ_CNC_xNoCliente", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@NumCliente", ClientNumber);
                    SqlDataReader dataReader = cmd.ExecuteReader();
                    if (dataReader.HasRows)
                    {
                        dataReader.Read();
                        cnc = new Cnc();
                        cnc.Id = dataReader["Id_Campana"].ToString();
                        cnc.Folio = dataReader["FOLIO"].ToString();
                        cnc.Plazo = int.Parse(dataReader["Plazo"].ToString());
                        cnc.Tasa = int.Parse(dataReader["Tasa"].ToString());
                        cnc.Linea24 = int.Parse(dataReader["Linea_24"].ToString());
                        cnc.Linea36 = int.Parse(dataReader["Linea_36"].ToString());
                        cnc.Linea48 = int.Parse(dataReader["Linea_48"].ToString());
                        cnc.Linea60 = int.Parse(dataReader["Linea_60"].ToString());
                        cnc.Sucursal = dataReader["Sucursal"].ToString();
                        cnc.Pago24 = Double.Parse(dataReader["Pago_24"].ToString());
                        cnc.Pago36 = Double.Parse(dataReader["Pago_36"].ToString());
                        cnc.Pago48 = Double.Parse(dataReader["Pago_48"].ToString());
                        cnc.Pago60 = Double.Parse(dataReader["Pago_60"].ToString());
                        cnc.MontoPromesa = int.Parse(dataReader["MontoPromesa"].ToString());
                        cnc.NumeroSucursal = dataReader["Numero_sucursal"].ToString();
                        cnc.New = dataReader["NEW"].ToString();
                        cnc.EstatusVenta = int.Parse(dataReader["EstatusVenta"].ToString());
                        cnc.Division = dataReader["Division"].ToString();
                        cnc.DirRegional = dataReader["Regional"].ToString();
                        cnc.FechaVicitaSucursal = dataReader["Fecha_Visita_sucursal"].ToString();
                        cnc.EstadoSucursal = dataReader["Estado_CNC"].ToString();
                        cnc.CATCNC = Double.Parse(dataReader["CAT"].ToString());
                        cnc.FechaCATCNC = dataReader["cnc_fecha_cat"].ToString();
                        cnc.MunicipioSucursal = dataReader["Municipio_CNC"].ToString();
                    }
                    dataReader.Close();
                    con.Close();
                }
                return cnc;
            }
            catch (SqlException ex)
            {
                return "Error: " + ex;
            }


        }

        public Object FindCPC(string ClientNumber)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                Cpc cpc = null;
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("uspQ_CPC_xNoCliente", con);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@NumCliente", ClientNumber);
                    SqlDataReader dataReader = cmd.ExecuteReader();
                    if (dataReader.HasRows)
                    {
                        dataReader.Read();
                        cpc = new Cpc
                        {
                            Id = int.Parse(dataReader["Id_Campana"].ToString()),
                            Folio = dataReader["FOLIO"].ToString(),
                            Sucursal = dataReader["Sucursal"].ToString(),
                            Tasa = dataReader["Tasa"].ToString(),

                            //(1) Mantenimiento 04 marzo 2019
                            MontoMax24 = double.Parse(dataReader["Monto_max_24"].ToString()),
                            //Pago24 = int.Parse(dataReader["Pago_24"].ToString()),
                            MontoMax36 = double.Parse(dataReader["Monto_max_36"].ToString()),
                            //Pago36 = int.Parse(dataReader["Pago_36"].ToString()),
                            MontoMax48 = double.Parse(dataReader["Monto_max_48"].ToString()),
                            //Pago48 = dataReader["Pago_48"].ToString(),
                            MontoMax60 = double.Parse(dataReader["Monto_max_60"].ToString()),
                            //Pago60 = int.Parse(dataReader["Pago_60"].ToString()),

                            Pago24 = double.Parse(dataReader["Pago_24"].ToString()),
                            Pago36 = double.Parse(dataReader["Pago_36"].ToString()),
                            Pago48 = double.Parse(dataReader["Pago_48"].ToString()),
                            Pago60 = double.Parse(dataReader["Pago_60"].ToString()),
                            Plazo = int.Parse(dataReader["Plazo"].ToString()),

                            //(1) Mantenimiento 04 marzo 2019
                            //MontoPromesa = int.Parse(dataReader["MontoPromesa"].ToString()),
                            MontoPromesa = double.Parse(dataReader["MontoPromesa"].ToString()),
                            FechaVicitaSucursal = dataReader["Fecha_Visita_sucursal"].ToString(),
                            NumeroSucursal = dataReader["Numero_Sucursal"].ToString(),
                            New = dataReader["NEW"].ToString(),
                            EstatusVenta = int.Parse(dataReader["EstatusVenta"].ToString()),
                            EstadoSucursal = dataReader["Estado_CPC"].ToString(),
                            MunicipioSucursal = dataReader["Municipio_CPC"].ToString(),
                            Division = dataReader["Division"].ToString(),
                            Oferta = dataReader["Oferta"].ToString(),
                            CAT = (dataReader["CAT"].ToString() != "") ? double.Parse(dataReader["CAT"].ToString()) : 0,
                            Regional = dataReader["Regional"].ToString(),
                            Fecha_cat = dataReader["Fecha_cat"].ToString()
                        };
                        dataReader.Close();
                    }
                    con.Close();
                }
                return cpc;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public Object FindPagare(string ClientNumber)
        {
            string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
            Pagare pagare = null;
            using (SqlConnection con = new SqlConnection(cadString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("uspQ_PAGARE_xNoCliente", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@NumCliente", ClientNumber);
                SqlDataReader dataReader = cmd.ExecuteReader();
                if (dataReader.HasRows)
                {
                    dataReader.Read();
                    pagare = new Pagare
                    {
                        Id = dataReader["Id_Campana"].ToString(),
                        Folio = dataReader["FOLIO"].ToString(),
                        NMSucursal = dataReader["Sucursal"].ToString(),
                        FechaVicitaSucursal = dataReader["Fecha_Visita_sucursal"].ToString(),
                        NumeroSucursal = dataReader["Numero_Sucursal"].ToString(),
                        New = dataReader["NEW"].ToString(),
                        Estado_SucPagare = Convert.ToInt32(dataReader["Estado_SucPagare"]),
                        Municipio_SucPagare = Convert.ToInt32(dataReader["Municipio_SucPagare"]),
                        Division = dataReader["Division"].ToString(),
                        Regional = dataReader["Regional"].ToString(),
                        //TipoVenta = dataReader["TipoVenta"].ToString(),
                        EstatusVenta = int.Parse(dataReader["EstatusVenta"].ToString())
                    };
                }
                dataReader.Close();
                con.Close();
            }
            return pagare;
        }


        //Camapaña agregarada el 11/02/2022
        public Object FindFondos(string ClientNumber)
        {
            string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
            Fondos fondos = null;
            using (SqlConnection con = new SqlConnection(cadString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("uspQ_FONDOS_xNoCliente", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@NumCliente", ClientNumber);
                SqlDataReader dataReader = cmd.ExecuteReader();
                if (dataReader.HasRows)
                {
                    dataReader.Read();
                    fondos = new Fondos
                    {
                        Id = dataReader["Id_Campana"].ToString(),
                        Folio = dataReader["FOLIO"].ToString(),
                        NMSucursal = dataReader["Sucursal"].ToString(),
                        FechaVicitaSucursal = dataReader["Fecha_Visita_sucursal"].ToString(),
                        NumeroSucursal = dataReader["Numero_Sucursal"].ToString(),
                        New = dataReader["NEW"].ToString(),
                        Estado_SucFondos = Convert.ToInt32(dataReader["Estado_SucFondos"]),
                        Municipio_SucFondos = Convert.ToInt32(dataReader["Municipio_SucFondos"]),
                        Division = dataReader["Division"].ToString(),
                        Regional = dataReader["Regional"].ToString(),
                        //TipoVenta = dataReader["TipoVenta"].ToString(),
                        EstatusVenta = int.Parse(dataReader["EstatusVenta"].ToString())
                    };
                }
                dataReader.Close();
                con.Close();
            }
            return fondos;
        }

        public Object FindDISPONIBLE(string ClientNumber)
        {
            string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
            Disponible disponible = null;
            using (SqlConnection con = new SqlConnection(cadString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("uspQ_Disponible_xNoCliente", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@NumCliente", ClientNumber);
                SqlDataReader dataReader = cmd.ExecuteReader();
                if (dataReader.HasRows)
                {
                    dataReader.Read();
                    disponible = new Disponible();
                    disponible.Id = dataReader["Id_Campana"].ToString();
                    disponible.Folio = dataReader["FOLIO"].ToString();
                    disponible.TelTrabajo = dataReader["Tel_trabajo"].ToString();
                    disponible.Celular2 = dataReader["Celular_2"].ToString();
                    disponible.Producto = dataReader["Producto"].ToString();
                    disponible.Incremento = float.Parse(dataReader["Incremento"].ToString());
                    disponible.LineaActual = float.Parse(dataReader["LineaActual"].ToString());
                    disponible.LineaNueva = float.Parse(dataReader["Linea_Nueva"].ToString());
                    disponible.FechaCat = dataReader["Fecha_cat"].ToString();
                    disponible.Ult4DIG = dataReader["Ult_4_dgt"].ToString();
                    disponible.TasaAnual = dataReader["Tasa_Anual"].ToString();
                    disponible.Cat = dataReader["Cat"].ToString();
                    disponible.MontoMaximo = float.Parse(dataReader["Monto_Maximo"].ToString());
                    disponible.TipoLlamada = int.Parse(dataReader["Tipo_llamada"].ToString());
                    disponible.Gepc = dataReader["Gepc"].ToString();
                    disponible.PlazoDisponible = int.Parse(dataReader["Plazo_Disponible"].ToString());
                    disponible.MontoDisponible = float.Parse(dataReader["Monto_Disponible"].ToString());
                    disponible.FechaVenta = dataReader["Fecha_venta"].ToString();
                    disponible.Estatus = int.Parse(dataReader["Estatus"].ToString());
                    disponible.New = dataReader["NEW"].ToString();
                    disponible.EstatusVenta = int.Parse(dataReader["EstatusVenta"].ToString());
                    disponible.TipoOferta = dataReader["desc_producto"].ToString();
                    disponible.Bancanet = (dataReader["bancanet"] != DBNull.Value) ? Convert.ToInt32(dataReader["bancanet"]) : 0;
                    disponible.Adicionales = (dataReader["adicionales"] != DBNull.Value) ? Convert.ToInt32(dataReader["adicionales"]) : 0;
                    disponible.NumAdic = int.Parse(dataReader["Num_Adicionales"].ToString());
                    disponible.FechaVicitaSucursal = dataReader["Fecha_Visita_sucursal"].ToString();
                }
                dataReader.Close();
                con.Close();
            }
            return disponible;
        }

        public Object FindHipo(string ClientNumber)
        {
            string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
            Hipotecario HIPO = null;
            using (SqlConnection con = new SqlConnection(cadString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("uspQ_HIPO_xNoCliente", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@NumCliente", ClientNumber);
                SqlDataReader dataReader = cmd.ExecuteReader();
                if (dataReader.HasRows)
                {
                    dataReader.Read();
                    HIPO = new Hipotecario();
                    HIPO.Id = dataReader["Id_Campana"].ToString();
                    HIPO.Folio = dataReader["FOLIO"].ToString();
                    HIPO.Tipo = dataReader["Tipo"].ToString();

                    HIPO.MontoPromesa = dataReader["MontoPromesa"].ToString();
                    //HIPO.Tasa = dataReader["Tasa"].ToString();
                    //HIPO.CAT = dataReader["CAT"].ToString();

                    HIPO.NumeroSucursal = dataReader["Numero_sucursal"].ToString();
                    HIPO.New = dataReader["NEW"].ToString();
                    HIPO.EstatusVenta = int.Parse(dataReader["EstatusVenta"].ToString());
                    HIPO.Division = dataReader["Division"].ToString();
                    HIPO.DirRegional = dataReader["Regional"].ToString();
                    HIPO.FechaVicitaSucursal = dataReader["Fecha_Visita_sucursal"].ToString();
                    HIPO.EstatusVenta = int.Parse(dataReader["EstatusVenta"].ToString());
                    HIPO.EstadoSucursal = dataReader["Estado_HIPO"].ToString();
                    HIPO.MunicipioSucursal = dataReader["Municipio_HIPPO"].ToString();
                    HIPO.Sucursal = dataReader["Sucursal"].ToString();
                }
                dataReader.Close();
                con.Close();
            }
            return HIPO;
        }

        public Object FindPYME(string ClientNumber)
        {
            string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
            Pyme pyme = null;
            using (SqlConnection con = new SqlConnection(cadString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("uspQ_PYME_xNoCliente", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@NumCliente", ClientNumber);
                SqlDataReader dataReader = cmd.ExecuteReader();
                if (dataReader.HasRows)
                {
                    dataReader.Read();
                    pyme = new Pyme
                    {
                        Id = dataReader["Id_Campana"].ToString(),
                        Folio = dataReader["FOLIO"].ToString(),
                        Division = dataReader["Division"].ToString(),
                        Sucursal = dataReader["Sucursal"].ToString(),
                        Plazo = int.Parse(dataReader["Plazo"].ToString()),
                        LineaActual = int.Parse(dataReader["LineaActual"].ToString()),
                        Linea36 = int.Parse(dataReader["Linea_36"].ToString()),
                        Linea48 = int.Parse(dataReader["Linea_48"].ToString()),
                        Linea60 = int.Parse(dataReader["Linea_60"].ToString()),
                        LineaTotal = int.Parse(dataReader["Linea_total"].ToString()),
                        NumeroExt = dataReader["Numero_ext"].ToString(),
                        NumeroInt = dataReader["Numero_int"].ToString(),
                        Tasa36 = dataReader["Tasa_36"].ToString(),
                        Pago36 = int.Parse(dataReader["Pago_36"].ToString()),
                        Tasa48 = dataReader["Tasa_48"].ToString(),
                        Pago48 = int.Parse(dataReader["Pago_48"].ToString()),
                        Tasa60 = dataReader["Tasa_60"].ToString(),
                        Pago60 = int.Parse(dataReader["Pago_60"].ToString()),
                        MontoPromesa = int.Parse(dataReader["MontoPromesa"].ToString()),
                        FechaVicitaSucursal = dataReader["Fecha_Visita_sucursal"].ToString(),
                        Regional = dataReader["Regional"].ToString(),
                        NumeroSucursal = dataReader["Numero_Sucursal"].ToString(),
                        LineaCLI = int.Parse(dataReader["LineaCLI"].ToString()),
                        CatAmortizable = float.Parse(dataReader["Cat_Amortizable"].ToString()),
                        CatRevolvente = float.Parse(dataReader["Cat_Revolvente"].ToString()),
                        LineaAmortizable = int.Parse(dataReader["Linea_Amortizable"].ToString()),
                        TasaAmortizable = int.Parse(dataReader["Tasa_Amortizable"].ToString()),
                        PagoMenAmortizable = float.Parse(dataReader["Pago_Men_Amortizable"].ToString()),
                        LineaRevolvente = int.Parse(dataReader["Linea_Revolvente"].ToString()),
                        TasaRevolvente = float.Parse(dataReader["Tasa_Revolvente"].ToString()),
                        New = dataReader["NEW"].ToString(),
                        EstatusVenta = int.Parse(dataReader["EstatusVenta"].ToString())
                    };

                }
                dataReader.Close();
                con.Close();
            }
            return pyme;
        }

        public Object FindREDISPOSICION(string ClientNumber)
        {
            string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
            Redisposicion redisposicion = null;
            using (SqlConnection con = new SqlConnection(cadString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("uspQ_REDISPOSICION_xNoCliente", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@NumCliente", ClientNumber);
                SqlDataReader dataReader = cmd.ExecuteReader();
                if (dataReader.HasRows)
                {
                    dataReader.Read();
                    redisposicion = new Redisposicion();
                    redisposicion.Id = Convert.ToInt32(dataReader["Id_Campana"].ToString());
                    redisposicion.Folio = dataReader["FOLIO"].ToString();
                    redisposicion.Producto = dataReader["Producto"].ToString();
                    redisposicion.LineaCredito = Convert.ToInt32(dataReader["Linea_credito"].ToString());
                    redisposicion.TasaOriginal = dataReader["Tasa_Originale"].ToString();
                    redisposicion.MontoDispersion = dataReader["Monto_dispersion"].ToString();
                    //============
                    redisposicion.Incremento = dataReader["Incremento"].ToString();
                    redisposicion.LineaActual = Convert.ToInt32(dataReader["Linea_actual"].ToString());
                    redisposicion.LineaNueva = Convert.ToInt32(dataReader["Linea_nueva"].ToString());
                    //==================
                    redisposicion.NumeroTargeta = dataReader["No_Tarjeta"].ToString();
                    redisposicion.PlazoCredito = Convert.ToInt32(dataReader["Plazo_credito"].ToString());
                    redisposicion.Pago36 = Convert.ToInt32(dataReader["Pago_36"].ToString());
                    //==================
                    redisposicion.Pago48 = Convert.ToInt32(dataReader["Pago_48"].ToString());
                    redisposicion.Pago60 = Convert.ToInt32(dataReader["Pago_60"].ToString());
                    redisposicion.CantidadDisponer = dataReader["Cantidad_disponer"].ToString();
                    //===============
                    redisposicion.Ultimo3MesesUtilizandoBancaNet = Convert.ToInt32(dataReader["Ultimos_3_meses_utilizado_bancanet"].ToString());
                    redisposicion.TieneTDCCitibanamex = Convert.ToInt32(dataReader["Tiene_tdc_citibanamex"].ToString());
                    redisposicion.CualEsCP = dataReader["Cual_es_su_codigo_postal"].ToString();
                    redisposicion.New = dataReader["NEW"].ToString();
                    redisposicion.EstatusVenta = int.Parse(dataReader["EstatusVenta"].ToString());

                }
                dataReader.Close();
                con.Close();
            }
            return redisposicion;
        }

        public List<Object> FindTDC(string ClientNumber)
        {
            List<Object> listaTdc = new List<object>();
            string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
            Tdc tdc = null;
            using (SqlConnection con = new SqlConnection(cadString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("uspQ_TDC_xNoCliente", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@NumCliente", ClientNumber);
                SqlDataReader dataReader = cmd.ExecuteReader();
                if (dataReader.HasRows)
                {
                    while (dataReader.Read())
                    {
                        tdc = new Tdc();
                        tdc.Id = dataReader["Id_Campana"].ToString();
                        tdc.Folio = dataReader["FOLIO"].ToString();
                        tdc.NomEmp = dataReader["Nom_Emp"].ToString();
                        tdc.Division = dataReader["Division"].ToString();
                        tdc.TelefonoEmp = dataReader["Telefono_Emp"].ToString();
                        tdc.Ext = dataReader["Ext"].ToString();
                        tdc.Producto = dataReader["Producto"].ToString();
                        tdc.Sucursal = dataReader["Sucursal"].ToString();
                        tdc.PaisNacimiento = int.Parse(dataReader["Pais_Nacimiento"].ToString());
                        tdc.EntidadFederativa = int.Parse(dataReader["Entidad_Federativa"].ToString());
                        tdc.PaisNacionalidad = int.Parse(dataReader["Pais_nacionalidad"].ToString());
                        tdc.Genero = dataReader["Genero"].ToString();
                        tdc.EdoCivil = int.Parse(dataReader["Edo_Civil"].ToString());
                        tdc.Escolaridad = int.Parse(dataReader["Escolaridad"].ToString());
                        tdc.NumDependientes = dataReader["Num_Dependientes"].ToString();
                        tdc.TipoVivienda = int.Parse(dataReader["Tipo_Vivienda"].ToString());
                        tdc.AniosResidencia = dataReader["Anios_Recidencia"].ToString();
                        tdc.CalleEmp = dataReader["Calle_Emp"].ToString();
                        tdc.NumIntEmp = dataReader["Num_int_Emp"].ToString();
                        tdc.NumExtEmp = dataReader["Num_ext_Emp"].ToString();
                        tdc.CodigoPostalEmp = dataReader["Cp_Emp"].ToString();
                        tdc.ColoniaEmp = dataReader["Colonia_Emp"].ToString();
                        tdc.EstadoEmp = dataReader["Estado_Emp"].ToString();
                        tdc.DelegacionEmp = dataReader["Delegacion_Emp"].ToString();
                        tdc.Actividad = dataReader["Actividad"].ToString();
                        tdc.Ocupacion = dataReader["Ocupacion"].ToString();
                        tdc.TipoEmpleo = dataReader["Tipo_Empleo"].ToString();
                        tdc.AntiguedadAnios = dataReader["Antiguedad_anios"].ToString().Trim();
                        tdc.AntiguedadMeses = dataReader["Antiguedad_meses"].ToString().Trim();
                        tdc.IngresoMensual = float.Parse(dataReader["Ingreso_Mensual"].ToString());
                        tdc.CompIngresos = int.Parse(dataReader["Comp_Ingresos"].ToString());
                        tdc.TipoIdentificacion = int.Parse(dataReader["Tipo_Identificacion"].ToString());
                        tdc.ComprobanteDomicilio = int.Parse(dataReader["Comp_Domicilio"].ToString());
                        tdc.Institucion1 = int.Parse(dataReader["Institucion1"].ToString());
                        tdc.TipoCuenta1 = int.Parse(dataReader["Tipo_Cuenta1"].ToString());
                        tdc.Terminacion1 = int.Parse(dataReader["Terminacion1"].ToString());
                        tdc.Institucion2 = int.Parse(dataReader["Institucion2"].ToString());
                        tdc.TipoCuenta2 = int.Parse(dataReader["Tipo_Cuenta2"].ToString());
                        tdc.Terminacion2 = int.Parse(dataReader["Terminacion2"].ToString());
                        tdc.Institucion3 = int.Parse(dataReader["Institucion3"].ToString());
                        tdc.TipoCuenta3 = int.Parse(dataReader["Tipo_Cuenta3"].ToString());
                        tdc.Terminacion3 = int.Parse(dataReader["Terminacion3"].ToString());
                        tdc.MaternoRef1 = dataReader["Materno_Ref1"].ToString();
                        tdc.PaternoRef1 = dataReader["Paterno_Ref1"].ToString();
                        tdc.NombreRef1 = dataReader["Nombre_Ref1"].ToString();
                        tdc.ParentescoRef1 = int.Parse(dataReader["Parentesco_Ref1"].ToString());
                        tdc.TelefonoRef1 = dataReader["Telefono_Ref1"].ToString();
                        tdc.ExtRef1 = dataReader["Ext_Ref1"].ToString();
                        tdc.MaternoRef2 = dataReader["Materno_Ref2"].ToString();
                        tdc.PaternoRef2 = dataReader["Paterno_Ref2"].ToString();
                        tdc.NombreRef2 = dataReader["Nombre_Ref2"].ToString();
                        tdc.ParentescoRef2 = int.Parse(dataReader["Parentesco_Ref2"].ToString());
                        tdc.TelefonoRef2 = dataReader["Telefono_Ref2"].ToString();
                        tdc.ExtRef2 = dataReader["Ext_Ref2"].ToString();
                        tdc.FechaVisitaSuc = dataReader["Fecha_Visita_sucursal"].ToString();
                        tdc.Regional = dataReader["Regional"].ToString();
                        tdc.NumeroSucursal = dataReader["Numero_Sucursal"].ToString();
                        tdc.FolioECS = dataReader["Folio_ECS"].ToString();
                        tdc.RefBuro = int.Parse(dataReader["Ref_Buro"].ToString());
                        tdc.EstatusAutenticacion = int.Parse(dataReader["Estatus_Autenticacion"].ToString());

                        tdc.EstatusFrontTMK = Convert.ToInt32(dataReader["Estatus_Front_TMK"].ToString());
                        tdc.EstatusFrontTMK2 = Convert.ToInt32(dataReader["Estatus_Front_TMK2"].ToString());    //Actualización 21-03-2019

                        tdc.CausaDeclinacion = dataReader["Causa_Declinacion"].ToString();
                        tdc.EstatusDeclinacion = Convert.ToInt32(dataReader["Estatus_Declinacion"].ToString());
                        tdc.TelefonoProc = dataReader["Telefono_Proc"].ToString();
                        tdc.TipoPersona = Convert.ToInt32(dataReader["Tipo_persona"].ToString());
                        tdc.TipoTargeta = Convert.ToInt32(dataReader["Tipo_Tarjeta"].ToString());
                        tdc.TipoTargetaBancaria = Convert.ToInt32(dataReader["Tipo_Tarjeta_Bancaria"].ToString());
                        tdc.TipoTargetaDepartamental = Convert.ToInt32(dataReader["Tipo_Tarjeta_Departamental"].ToString());
                        tdc.TipoTargetaComercial = Convert.ToInt32(dataReader["Tipo_Tarjeta_Comercial"].ToString());
                        tdc.SinTDC = Convert.ToInt32(dataReader["Sin_TDC"].ToString());
                        tdc.TipoRecibidosNomina = Convert.ToInt32(dataReader["Tipo_Recibos_nomina"].ToString());
                        tdc.TipoEstadoCuenta = Convert.ToInt32(dataReader["Tipo_Edo_cuenta"].ToString());

                        tdc.Antiguedad = Convert.ToInt32(dataReader["Antiguedad"].ToString());
                        tdc.Ingresos = Convert.ToInt32(dataReader["Ingresos"].ToString());
                        tdc.Buro = Convert.ToInt32(dataReader["Buro"].ToString());
                        tdc.EstatusFinal = Convert.ToInt32(dataReader["Estatus_Final"].ToString());
                        tdc.ProcesoPendiente = Convert.ToInt32(dataReader["Proceso_Pendiente"].ToString());
                        tdc.Canceladas = Convert.ToInt32(dataReader["Canceladas"].ToString());
                        tdc.Comentarios = dataReader["Comentarios"].ToString();
                        tdc.ComentariosProc = dataReader["Comentarios_proc"].ToString();
                        tdc.New = dataReader["NEW"].ToString();
                        tdc.EstatusVenta = int.Parse(dataReader["EstatusVenta"].ToString());
                        tdc.email = dataReader["EMAIL"].ToString();
                        tdc.Curp = dataReader["Curp"].ToString();
                        tdc.Razon = int.Parse(dataReader["Razon"].ToString());
                        tdc.Linea_Credito = dataReader["prueba"].ToString();
                        tdc.EstadoSuc = dataReader["Estado_TDC"].ToString();
                        tdc.MunicipioSuc = dataReader["Municipio_TDC"].ToString();

                        if (tdc.Genero == null || tdc.Genero == "")
                        {
                            tdc.Genero = "0";
                        }
                        try
                        {
                            dataReader["Estado_Emp"].ToString();
                        }
                        catch (Exception)
                        {
                            tdc.EntidadFederativa = 0;
                        }

                        try
                        {
                            dataReader["Delegacion_Emp"].ToString();
                        }
                        catch (Exception)
                        {
                            tdc.EstadoEmp = "0";
                        }
                        try
                        {
                            dataReader["Colonia_Emp"].ToString();
                        }
                        catch (Exception)
                        {
                            tdc.EntidadFederativa = 0;
                        }
                        tdc.Celular = (dataReader["Celular"] != DBNull.Value) ? dataReader["Celular"].ToString() : "";
                        tdc.Telefono = (dataReader["Telefono"] != DBNull.Value) ? dataReader["Telefono"].ToString() : "";
                        tdc.Tel_Contacto = (dataReader["Tel_Contacto"] != DBNull.Value) ? dataReader["Tel_Contacto"].ToString() : ""; //modificacion 08/02/2022
                        listaTdc.Add(tdc);
                    }
                }
                dataReader.Close();
                con.Close();
            }
            return listaTdc;
        }
        /*-----------------------*/
        /*-----------------------*/

        //para guardar los datos de cada campaña
        public Object SaveBALCON(Balcon balcon, int opc, long idValidador)
        {
            //try
            //{
            string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cadString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("AddBalcon", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                //Balcon balcon = (Balcon)datosCliente.Campanias.ElementAt(0);
                cmd.Parameters.AddWithValue("@idCampana", balcon.Id);
                cmd.Parameters.AddWithValue("@Nombre", balcon.Nombre);
                cmd.Parameters.AddWithValue("@Apellido_paterno", balcon.ApellidoPaterno);
                cmd.Parameters.AddWithValue("@Apellido_materno", balcon.ApellidoMaterno);
                cmd.Parameters.AddWithValue("@Municipio", balcon.Municipio);
                cmd.Parameters.AddWithValue("@Colonia", balcon.Colonia);
                cmd.Parameters.AddWithValue("@Calle", balcon.Calle);
                cmd.Parameters.AddWithValue("@Numero_ext", balcon.NumeroExterior);
                cmd.Parameters.AddWithValue("@Numero_int", balcon.NumeroInterior);
                cmd.Parameters.AddWithValue("@Folio", balcon.Folio);
                cmd.Parameters.AddWithValue("@NumCliente", balcon.NumeroCliente);
                cmd.Parameters.AddWithValue("@FechaNac", balcon.FechaNacimiento);
                cmd.Parameters.AddWithValue("@Rfc", balcon.RFC);
                cmd.Parameters.AddWithValue("@Cp", balcon.CodigoPostal);
                cmd.Parameters.AddWithValue("@Estado", balcon.Estado);
                //cmd.Parameters.AddWithValue("@Tel_casa", (balcon.TelefonoCasa != null) ? balcon.TelefonoCasa : DBNull.Value.ToString());
                //cmd.Parameters.AddWithValue("@Tel_trabajo", (balcon.TelTrabajo != null)? balcon.TelTrabajo : DBNull.Value.ToString());
                //cmd.Parameters.AddWithValue("@Celular", (balcon.Celular != null) ? balcon.Celular : DBNull.Value.ToString());
                //cmd.Parameters.AddWithValue("@Celular2", (balcon.Celular2 != null) ? balcon.Celular2 : DBNull.Value.ToString());
                //cmd.Parameters.AddWithValue("@LineaActual", balcon.LineaActual);
                //cmd.Parameters.AddWithValue("@LineaNueva", balcon.LineaNueva);
                //cmd.Parameters.AddWithValue("@Incremento", balcon.Incremento);
                cmd.Parameters.AddWithValue("@Producto", balcon.Producto);
                cmd.Parameters.AddWithValue("@Ult4Dgt", balcon.Ult4DGT);
                cmd.Parameters.AddWithValue("@TasaAnual", balcon.TasaAnual);
                cmd.Parameters.AddWithValue("@Cat", balcon.Cat);
                cmd.Parameters.AddWithValue("@FechaCat", balcon.FechaCat);
                //cmd.Parameters.AddWithValue("@MontoMaximo", balcon.MontoMaximo);
                cmd.Parameters.AddWithValue("@TipoLlamada", balcon.TipoLlamada);
                //cmd.Parameters.AddWithValue("@Gepc", balcon.Gepc);
                //cmd.Parameters.AddWithValue("@Plazo1", balcon.Plazo1);
                //cmd.Parameters.AddWithValue("@NombreBanco1", balcon.NombreBanco1);
                //cmd.Parameters.AddWithValue("@CantTransferencia1", balcon.CantTransferencia1);
                //cmd.Parameters.AddWithValue("@Plazo2", balcon.Plazo2);
                //cmd.Parameters.AddWithValue("@NombreBanco2", balcon.NombreBanco2);
                //cmd.Parameters.AddWithValue("@CantTransferencia2", balcon.CantTransferencia2);
                //cmd.Parameters.AddWithValue("@Plazo3", balcon.Plazo3);
                //cmd.Parameters.AddWithValue("@NombreBanco3", balcon.NombreBanco3);
                //cmd.Parameters.AddWithValue("@CantTransferencia3", balcon.CantTransferencia3);
                //cmd.Parameters.AddWithValue("@Plazo4", balcon.Plazo4);
                //cmd.Parameters.AddWithValue("@NombreBanco4", balcon.NombreBanco4);
                //cmd.Parameters.AddWithValue("@CantTransferencia4", balcon.CantTransferencia4);
                //cmd.Parameters.AddWithValue("@Plazo5", balcon.Plazo5);
                //cmd.Parameters.AddWithValue("@NombreBanco5", balcon.NombreBanco5);
                //cmd.Parameters.AddWithValue("@CantTransferencia5", balcon.CantTransferencia5);
                //cmd.Parameters.AddWithValue("@FechaVenta", balcon.FechaVenta);
                cmd.Parameters.AddWithValue("@Estatus", balcon.Estatus);
                cmd.Parameters.AddWithValue("@FechaVisitaSucursal", (balcon.FechaVisitaSucursal != null) ? balcon.FechaVisitaSucursal : DBNull.Value.ToString());

                cmd.Parameters.AddWithValue("@Division", (balcon.Division != null) ? balcon.Division : DBNull.Value.ToString()); ;


                cmd.Parameters.AddWithValue("@Regional", (balcon.Regional != null) ? balcon.Regional : DBNull.Value.ToString());
                cmd.Parameters.AddWithValue("@Sucursal", (balcon.Sucursal != null) ? balcon.Sucursal : DBNull.Value.ToString());

                cmd.Parameters.AddWithValue("@NumeroSucursal", (balcon.NumeroSucursal != null) ? balcon.NumeroSucursal : DBNull.Value.ToString());
                cmd.Parameters.AddWithValue("@opc", opc);
                if (opc != 1)
                {
                    cmd.Parameters.AddWithValue("@IdEstatusVenta", balcon.EstatusVenta);
                }
                else
                {
                    cmd.Parameters.AddWithValue("@IdEstatusVenta", 0);
                }
                cmd.Parameters.AddWithValue("@IdValidador", idValidador);
                cmd.ExecuteNonQuery();
                con.Close();

            }
            return true;
            //}
            //catch (SqlException ex)
            //{
            //    return "Error: " + ex;
            //}
        }

        public string SaveCLI(Cli datosCliente, long idValidador, long idRVT)
        {
            //try
            //{
            string r = "";
            string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cadString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("AddIncrementoLinea", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@idCampana", datosCliente.Id);
                cmd.Parameters.AddWithValue("@Folio", datosCliente.Folio);
                cmd.Parameters.AddWithValue("@NumCliente", datosCliente.NumeroCliente);
                cmd.Parameters.AddWithValue("@ApellidoPaterno", datosCliente.ApellidoPaterno);
                cmd.Parameters.AddWithValue("@ApellidoMaterno", datosCliente.ApellidoMaterno);
                cmd.Parameters.AddWithValue("@Nombre", datosCliente.Nombre);
                cmd.Parameters.AddWithValue("@FechaNacimiento", datosCliente.FechaNacimiento);
                cmd.Parameters.AddWithValue("@RfcCliente", datosCliente.RFC);
                cmd.Parameters.AddWithValue("@CpCliente", datosCliente.CodigoPostal);
                cmd.Parameters.AddWithValue("@Estado", datosCliente.Estado);
                cmd.Parameters.AddWithValue("@Municipio", datosCliente.Municipio);
                cmd.Parameters.AddWithValue("@Colonia", datosCliente.Colonia);
                cmd.Parameters.AddWithValue("@Calle", datosCliente.Calle);
                cmd.Parameters.AddWithValue("@Numero_ext", datosCliente.NumeroExterior);
                cmd.Parameters.AddWithValue("@Num_int", datosCliente.NumeroInterior);
                cmd.Parameters.AddWithValue("@NumeroTargeta", datosCliente.NumeroTargeta);
                cmd.Parameters.AddWithValue("@Producto", datosCliente.Producto);
                cmd.Parameters.AddWithValue("@LineaActual", datosCliente.LineaAtual);
                cmd.Parameters.AddWithValue("@LineaIncremento", datosCliente.IncrementoLinea);
                cmd.Parameters.AddWithValue("@LineaNuevaTotal", datosCliente.LineaNuevaTotal);
                cmd.Parameters.AddWithValue("@BancaElectronica", datosCliente.BancaElectronica);
                cmd.Parameters.AddWithValue("@TieneAdicionales", datosCliente.TieneAdicionales);
                cmd.Parameters.AddWithValue("@Autenticacion", datosCliente.Autenticacion);
                cmd.Parameters.AddWithValue("@IdPlaza", datosCliente.IdPlaza);
                cmd.Parameters.AddWithValue("@Piso", datosCliente.Piso);
                cmd.Parameters.AddWithValue("@ClienteDesde", datosCliente.ClienteDesde);


                //cmd.Parameters.AddWithValue("@opc", opc);
                //if (opc != 1)
                //{
                //    cmd.Parameters.AddWithValue("@IdEstatusVenta", datosCliente.EstatusVenta);
                //}
                //else
                //{
                //    cmd.Parameters.AddWithValue("@IdEstatusVenta", 0);
                //}
                cmd.Parameters.AddWithValue("@IdValidad", idValidador);
                cmd.Parameters.AddWithValue("@idRVT", idRVT);
                cmd.Parameters.AddWithValue("@Autentica", (datosCliente.Autentica != "") ? datosCliente.Autentica : DBNull.Value.ToString());

                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    r = rdr["Respuesta"].ToString();
                }
                con.Close();
            }
            return r;
            //}
            //catch (SqlException ex)
            //{
            //    return "Error: " + ex;
            //}
        }

        public Object SaveCNC(Cnc cnc, int opc, long idValidador)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("AddCnc", con);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@idCampana", cnc.Id);
                    cmd.Parameters.AddWithValue("@Folio", cnc.Folio);
                    cmd.Parameters.AddWithValue("@NumCliente", cnc.NumeroCliente);
                    cmd.Parameters.AddWithValue("@Apellido_paterno", cnc.ApellidoPaterno);
                    cmd.Parameters.AddWithValue("@Apellido_materno", cnc.ApellidoMaterno);
                    cmd.Parameters.AddWithValue("@Nombre", cnc.Nombre);
                    cmd.Parameters.AddWithValue("@FechaNac", cnc.FechaNacimiento);
                    cmd.Parameters.AddWithValue("@Rfc", cnc.RFC);
                    cmd.Parameters.AddWithValue("@Cp", cnc.CodigoPostal);
                    cmd.Parameters.AddWithValue("@Estado", cnc.Estado);
                    cmd.Parameters.AddWithValue("@Municipio", cnc.Municipio != null ? cnc.Municipio : "");
                    cmd.Parameters.AddWithValue("@Colonia", cnc.Colonia);
                    cmd.Parameters.AddWithValue("@Calle", cnc.Calle);
                    cmd.Parameters.AddWithValue("@NumeroExt", cnc.NumeroExterior);
                    cmd.Parameters.AddWithValue("@NumeroInt", cnc.NumeroInterior);
                    cmd.Parameters.AddWithValue("@Linea24", cnc.Linea24);
                    cmd.Parameters.AddWithValue("@Pago24", cnc.Pago24);
                    cmd.Parameters.AddWithValue("@Linea36", cnc.Linea36);
                    cmd.Parameters.AddWithValue("@Pago36", cnc.Pago36);
                    cmd.Parameters.AddWithValue("@Linea48", cnc.Linea48);
                    cmd.Parameters.AddWithValue("@Pago48", cnc.Pago48);
                    cmd.Parameters.AddWithValue("@Linea60", cnc.Linea60);
                    cmd.Parameters.AddWithValue("@Pago60", cnc.Pago60);
                    cmd.Parameters.AddWithValue("@Plazo", cnc.Plazo);
                    cmd.Parameters.AddWithValue("@Tasa", cnc.Tasa); //Actualización 04042019
                    cmd.Parameters.AddWithValue("@MontoPromesa", cnc.MontoPromesa);
                    cmd.Parameters.AddWithValue("@FechaVicitaSucursal", cnc.FechaVicitaSucursal);
                    cmd.Parameters.AddWithValue("@Division", cnc.Division);
                    cmd.Parameters.AddWithValue("@Regional", cnc.DirRegional);
                    cmd.Parameters.AddWithValue("@Sucursal", cnc.Sucursal);
                    cmd.Parameters.AddWithValue("@NumeroSucursal", cnc.NumeroSucursal);
                    cmd.Parameters.AddWithValue("@opc", opc);
                    if (opc != 1)
                    {
                        cmd.Parameters.AddWithValue("@IdEstatusVenta", cnc.EstatusVenta);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@IdEstatusVenta", 0);
                    }
                    cmd.Parameters.AddWithValue("@IdValidad", idValidador);
                    cmd.Parameters.AddWithValue("@val_fecha", (cnc.autentica != null) ? cnc.autentica : "");
                    cmd.Parameters.AddWithValue("@id_calificacion", cnc.ID_Calificacion);
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return true;
            }
            catch (SqlException ex)
            {
                return "Error: " + ex;
            }
        }

        public Object SaveCPC(Cpc cpc, int opc, long idValidador)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("AddCpc", con);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    //Cpc cpc = (Cpc)datosCliente.Campanias.ElementAt(0);
                    cmd.Parameters.AddWithValue("@idCampana", cpc.Id);
                    cmd.Parameters.AddWithValue("@Folio", cpc.Folio);
                    cmd.Parameters.AddWithValue("@NumCliente", cpc.NumeroCliente);
                    cmd.Parameters.AddWithValue("@Apellido_paterno", cpc.ApellidoPaterno);
                    cmd.Parameters.AddWithValue("@Apellido_materno", cpc.ApellidoMaterno);
                    cmd.Parameters.AddWithValue("@Nombre", cpc.Nombre);
                    cmd.Parameters.AddWithValue("@FechaNac", cpc.FechaNacimiento);
                    cmd.Parameters.AddWithValue("@Rfc", cpc.RFC);
                    cmd.Parameters.AddWithValue("@Calle", cpc.Calle);
                    cmd.Parameters.AddWithValue("@Numero_ext", cpc.NumeroExterior);
                    cmd.Parameters.AddWithValue("@Numero_int", cpc.NumeroInterior);
                    cmd.Parameters.AddWithValue("@Cp", cpc.CodigoPostal);
                    cmd.Parameters.AddWithValue("@Colonia", cpc.Colonia);
                    cmd.Parameters.AddWithValue("@Municipio", cpc.Municipio);
                    cmd.Parameters.AddWithValue("@Estado", cpc.Estado);

                    //(1) Mantenimiento 04 marzo 2019
                    cmd.Parameters.AddWithValue("@MontoMax60", cpc.MontoMax60);
                    cmd.Parameters.AddWithValue("@Pago60", cpc.Pago60);

                    cmd.Parameters.AddWithValue("@MontoMax24", cpc.MontoMax24);
                    cmd.Parameters.AddWithValue("@Pago24", cpc.Pago24);
                    cmd.Parameters.AddWithValue("@MontoMax36", cpc.MontoMax36);
                    cmd.Parameters.AddWithValue("@Pago36", cpc.Pago36);
                    cmd.Parameters.AddWithValue("@MontoMax48", cpc.MontoMax48);
                    cmd.Parameters.AddWithValue("@Pago48", cpc.Pago48);
                    cmd.Parameters.AddWithValue("@Tasa", cpc.Tasa);
                    cmd.Parameters.AddWithValue("@Plazo", cpc.Plazo);
                    cmd.Parameters.AddWithValue("@MontoPromesa", cpc.MontoPromesa);
                    cmd.Parameters.AddWithValue("@FechaVicitaSucursal", cpc.FechaVicitaSucursal);

                    cmd.Parameters.AddWithValue("@Division", cpc.Division);
                    cmd.Parameters.AddWithValue("@Regional", cpc.Regional);
                    cmd.Parameters.AddWithValue("@Sucursal", cpc.Sucursal);
                    cmd.Parameters.AddWithValue("@NumeroSucursal", cpc.NumeroSucursal);
                    cmd.Parameters.AddWithValue("@opc", opc);
                    if (opc != 1)
                    {
                        cmd.Parameters.AddWithValue("@IdEstatusVenta", cpc.EstatusVenta);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@IdEstatusVenta", 0);
                    }

                    cmd.Parameters.AddWithValue("@IdValidad", idValidador);
                    cmd.Parameters.AddWithValue("@Oferta", cpc.Oferta); //Mantenimiento 15 marzo 2019
                    cmd.Parameters.AddWithValue("@val_fecha", (cpc.autentica != null) ? cpc.autentica : "");
                    cmd.Parameters.AddWithValue("@id_calificacion", cpc.ID_Calificacion);
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return true;
            }
            catch (SqlException ex)
            {
                return "Error: " + ex;
            }
        }

        public Object SaveDISPONIBLE(Disponible datosCliente, int opc, long idValidador)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("AddDisponible", con);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@idCampana", datosCliente.Id);
                    cmd.Parameters.AddWithValue("@Folio", datosCliente.Folio);
                    cmd.Parameters.AddWithValue("@NumCliente", datosCliente.NumeroCliente);

                    cmd.Parameters.AddWithValue("@NomCompleto", datosCliente.Nombre);
                    cmd.Parameters.AddWithValue("@Apellido_paterno", datosCliente.ApellidoPaterno); //Corrección 22 de marzo del 2019
                    cmd.Parameters.AddWithValue("@Apellido_materno", datosCliente.ApellidoMaterno); //Corrección 22 de marzo del 2019

                    cmd.Parameters.AddWithValue("@FechaNac", datosCliente.FechaNacimiento);
                    cmd.Parameters.AddWithValue("@Rfc", datosCliente.RFC);
                    cmd.Parameters.AddWithValue("@Cp", datosCliente.CodigoPostal);
                    cmd.Parameters.AddWithValue("@Estado", datosCliente.Estado);
                    cmd.Parameters.AddWithValue("@Municipio", datosCliente.Municipio);
                    cmd.Parameters.AddWithValue("@Colonia", datosCliente.Colonia);
                    cmd.Parameters.AddWithValue("@Calle", datosCliente.Calle);
                    cmd.Parameters.AddWithValue("@Numero_ext", datosCliente.NumeroExterior);
                    cmd.Parameters.AddWithValue("@Numero_int", datosCliente.NumeroInterior);
                    cmd.Parameters.AddWithValue("@TelefonoCasa", (datosCliente.TelefonoCasa != null) ? datosCliente.TelefonoCasa : DBNull.Value.ToString());
                    cmd.Parameters.AddWithValue("@TelTrabajo", datosCliente.TelTrabajo);
                    cmd.Parameters.AddWithValue("@Celular", (datosCliente.Celular != null) ? datosCliente.Celular : DBNull.Value.ToString());
                    cmd.Parameters.AddWithValue("@Celular2", datosCliente.Celular2);
                    cmd.Parameters.AddWithValue("@LineaActual", datosCliente.LineaActual);
                    cmd.Parameters.AddWithValue("@LineaNueva", datosCliente.LineaNueva);
                    cmd.Parameters.AddWithValue("@Incremento", datosCliente.Incremento);
                    cmd.Parameters.AddWithValue("@Producto", datosCliente.Producto);
                    cmd.Parameters.AddWithValue("@Ult4Dgt", datosCliente.Ult4DIG);
                    cmd.Parameters.AddWithValue("@TasaAnual", datosCliente.TasaAnual);
                    cmd.Parameters.AddWithValue("@Cat", datosCliente.Cat);
                    cmd.Parameters.AddWithValue("@FechaCat", datosCliente.FechaCat);
                    cmd.Parameters.AddWithValue("@MontoMaximo", datosCliente.MontoMaximo);
                    //cmd.Parameters.AddWithValue("@TipoLlamada", datosCliente.TipoLlamada);
                    cmd.Parameters.AddWithValue("@TipoLlamada", 1);
                    //cmd.Parameters.AddWithValue("@Gepc", datosCliente.Gepc);
                    cmd.Parameters.AddWithValue("@Gepc", DBNull.Value);
                    cmd.Parameters.AddWithValue("@PlazoDisponible", datosCliente.PlazoDisponible);
                    cmd.Parameters.AddWithValue("@MontoDisponible", datosCliente.MontoDisponible);
                    cmd.Parameters.AddWithValue("@FechaVenta", datosCliente.FechaVenta);
                    cmd.Parameters.AddWithValue("@Estatus", datosCliente.Estatus);
                    cmd.Parameters.AddWithValue("@desc_producto", datosCliente.TipoOferta);
                    if (opc != 1)
                    {
                        cmd.Parameters.AddWithValue("@IdEstatusVenta", datosCliente.EstatusVenta);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@IdEstatusVenta", 0);
                    }
                    cmd.Parameters.AddWithValue("@banca", datosCliente.Bancanet);
                    cmd.Parameters.AddWithValue("@adic", datosCliente.Adicionales);
                    cmd.Parameters.AddWithValue("@opc", opc);
                    cmd.Parameters.AddWithValue("@IdValidad", idValidador);
                    cmd.Parameters.AddWithValue("@autentica", (datosCliente.autentica != null) ? datosCliente.autentica : "");
                    cmd.Parameters.AddWithValue("@FechaVisitaSuc", datosCliente.FechaVicitaSucursal);
                    cmd.ExecuteNonQuery();
                    con.Close();

                }
                return true;
            }
            catch (SqlException ex)
            {
                return "Error: " + ex;
            }
        }

        public Object SaveHIPO(Hipotecario HIPO, int opc, long idValidador)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("AddHIPO", con);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@idCampana", HIPO.Id);
                    cmd.Parameters.AddWithValue("@Folio", HIPO.Folio);
                    cmd.Parameters.AddWithValue("@NumCliente", HIPO.NumeroCliente);
                    cmd.Parameters.AddWithValue("@Apellido_paterno", HIPO.ApellidoPaterno);
                    cmd.Parameters.AddWithValue("@Apellido_materno", HIPO.ApellidoMaterno);
                    cmd.Parameters.AddWithValue("@Nombre", HIPO.Nombre);
                    cmd.Parameters.AddWithValue("@FechaNac", HIPO.FechaNacimiento);
                    cmd.Parameters.AddWithValue("@Rfc", HIPO.RFC);
                    cmd.Parameters.AddWithValue("@Cp", HIPO.CodigoPostal);
                    cmd.Parameters.AddWithValue("@Estado", HIPO.Estado);
                    cmd.Parameters.AddWithValue("@Municipio", HIPO.Municipio != null ? HIPO.Municipio : "");
                    cmd.Parameters.AddWithValue("@Colonia", HIPO.Colonia);
                    cmd.Parameters.AddWithValue("@Calle", HIPO.Calle);
                    cmd.Parameters.AddWithValue("@NumeroExt", HIPO.NumeroExterior);
                    cmd.Parameters.AddWithValue("@NumeroInt", HIPO.NumeroInterior);

                    cmd.Parameters.AddWithValue("@MontoPromesa", HIPO.MontoPromesa);
                    //cmd.Parameters.AddWithValue("@Tasa", HIPO.Tasa);
                    //cmd.Parameters.AddWithValue("@CAT", HIPO.CAT);

                    cmd.Parameters.AddWithValue("@Tipo", HIPO.Tipo);
                    cmd.Parameters.AddWithValue("@FechaVicitaSucursal", HIPO.FechaVicitaSucursal);
                    cmd.Parameters.AddWithValue("@Division", HIPO.Division);
                    cmd.Parameters.AddWithValue("@Regional", HIPO.DirRegional);
                    cmd.Parameters.AddWithValue("@Sucursal", HIPO.Sucursal);
                    cmd.Parameters.AddWithValue("@NumeroSucursal", HIPO.NumeroSucursal);
                    cmd.Parameters.AddWithValue("@opc", opc);
                    if (opc != 1)
                    {
                        cmd.Parameters.AddWithValue("@IdEstatusVenta", HIPO.EstatusVenta);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@IdEstatusVenta", 0);
                    }
                    cmd.Parameters.AddWithValue("@IdValidad", idValidador);
                    //cmd.Parameters.AddWithValue("@id_calificacion", HIPO.Calificacion);
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return true;
            }
            catch (SqlException ex)
            {
                return "Error: " + ex;
            }
        }

        public Object SavePAGARE(Pagare datosCliente, int opc, long idValidador)
        {
            //try
            //{
            string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cadString))
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("AddPagare", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@idCampana", datosCliente.Id);
                cmd.Parameters.AddWithValue("@Folio", datosCliente.Folio);
                cmd.Parameters.AddWithValue("@NumCliente", datosCliente.NumeroCliente);
                cmd.Parameters.AddWithValue("@Apellido_paterno", datosCliente.ApellidoPaterno);
                cmd.Parameters.AddWithValue("@Apellido_materno", datosCliente.ApellidoMaterno);
                cmd.Parameters.AddWithValue("@Nombre", datosCliente.Nombre);
                cmd.Parameters.AddWithValue("@FechaNac", datosCliente.FechaNacimiento);
                cmd.Parameters.AddWithValue("@Rfc", datosCliente.RFC);
                cmd.Parameters.AddWithValue("@Cp", datosCliente.CodigoPostal);
                cmd.Parameters.AddWithValue("@Estado", (datosCliente.Estado != null) ? datosCliente.Estado : DBNull.Value.ToString());
                cmd.Parameters.AddWithValue("@Municipio", (datosCliente.Municipio != null) ? datosCliente.Municipio : DBNull.Value.ToString());
                cmd.Parameters.AddWithValue("@Colonia", (datosCliente.Municipio != null) ? datosCliente.Colonia : DBNull.Value.ToString());
                cmd.Parameters.AddWithValue("@Calle", datosCliente.Calle);
                cmd.Parameters.AddWithValue("@Numero_ext", datosCliente.NumeroExterior);
                cmd.Parameters.AddWithValue("@Numero_int", datosCliente.NumeroInterior);
                cmd.Parameters.AddWithValue("@TelefonoCasa", (datosCliente.TelefonoCasa != null) ? datosCliente.TelefonoCasa : DBNull.Value.ToString());
                cmd.Parameters.AddWithValue("@Celular", (datosCliente.Celular != null) ? datosCliente.Celular : DBNull.Value.ToString());
                cmd.Parameters.AddWithValue("@FechaVicitaSucursal", (datosCliente.FechaVicitaSucursal != null) ? datosCliente.FechaVicitaSucursal : DBNull.Value.ToString());
                cmd.Parameters.AddWithValue("@Division", (datosCliente.Division != null) ? datosCliente.Division : DBNull.Value.ToString());
                cmd.Parameters.AddWithValue("@Regional", (datosCliente.Regional != null) ? datosCliente.Regional : DBNull.Value.ToString());
                cmd.Parameters.AddWithValue("@Sucursal", (datosCliente.Sucursal != null) ? datosCliente.Sucursal : DBNull.Value.ToString());
                cmd.Parameters.AddWithValue("@NumeroSucursal", (datosCliente.NumeroSucursal != null) ? datosCliente.NumeroSucursal : DBNull.Value.ToString());
                cmd.Parameters.AddWithValue("@opc", opc);
                if (opc != 1)
                {
                    cmd.Parameters.AddWithValue("@IdEstatusVenta", datosCliente.EstatusVenta);
                }
                else
                {
                    cmd.Parameters.AddWithValue("@IdEstatusVenta", 0);
                }
                cmd.Parameters.AddWithValue("@IdValidad", idValidador);

                cmd.ExecuteNonQuery();
                con.Close();
            }
            return true;
            //}
            //catch (SqlException ex)
            //{
            //    return "Error: " + ex;
            //}
        }

        //Campaña agregada 11/02/2022
        public Object SaveFondos(Fondos datosCliente, int opc, long idValidador)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("AddFondos", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@idCampana", datosCliente.Id);
                    cmd.Parameters.AddWithValue("@Folio", datosCliente.Folio);
                    cmd.Parameters.AddWithValue("@NumCliente", datosCliente.NumeroCliente);
                    cmd.Parameters.AddWithValue("@Apellido_paterno", datosCliente.ApellidoPaterno);
                    cmd.Parameters.AddWithValue("@Apellido_materno", datosCliente.ApellidoMaterno);
                    cmd.Parameters.AddWithValue("@Nombre", datosCliente.Nombre);
                    cmd.Parameters.AddWithValue("@FechaNac", datosCliente.FechaNacimiento);
                    cmd.Parameters.AddWithValue("@Rfc", datosCliente.RFC);
                    cmd.Parameters.AddWithValue("@Cp", datosCliente.CodigoPostal);
                    cmd.Parameters.AddWithValue("@Estado", datosCliente.Estado.ToString());
                    cmd.Parameters.AddWithValue("@Municipio", (datosCliente.Municipio != null) ? datosCliente.Municipio : DBNull.Value.ToString());
                    cmd.Parameters.AddWithValue("@Colonia", (datosCliente.Municipio != null) ? datosCliente.Colonia : DBNull.Value.ToString());
                    cmd.Parameters.AddWithValue("@Calle", datosCliente.Calle);
                    cmd.Parameters.AddWithValue("@Numero_ext", datosCliente.NumeroExterior);
                    cmd.Parameters.AddWithValue("@Numero_int", datosCliente.NumeroInterior);
                    cmd.Parameters.AddWithValue("@TelefonoCasa", (datosCliente.TelefonoCasa != null) ? datosCliente.TelefonoCasa : DBNull.Value.ToString());
                    cmd.Parameters.AddWithValue("@Celular", (datosCliente.Celular != null) ? datosCliente.Celular : DBNull.Value.ToString());
                    cmd.Parameters.AddWithValue("@FechaVicitaSucursal", (datosCliente.FechaVicitaSucursal != null) ? datosCliente.FechaVicitaSucursal : DBNull.Value.ToString());
                    cmd.Parameters.AddWithValue("@Division", (datosCliente.Division != null) ? datosCliente.Division : DBNull.Value.ToString());
                    cmd.Parameters.AddWithValue("@Regional", (datosCliente.Regional != null) ? datosCliente.Regional : DBNull.Value.ToString());
                    cmd.Parameters.AddWithValue("@Sucursal", (datosCliente.Sucursal != null) ? datosCliente.Sucursal : DBNull.Value.ToString());
                    cmd.Parameters.AddWithValue("@NumeroSucursal", (datosCliente.NumeroSucursal != null) ? datosCliente.NumeroSucursal : DBNull.Value.ToString());
                    cmd.Parameters.AddWithValue("@opc", opc);
                    if (opc != 1)
                    {
                        cmd.Parameters.AddWithValue("@IdEstatusVenta", datosCliente.EstatusVenta);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@IdEstatusVenta", 0);
                    }
                    cmd.Parameters.AddWithValue("@IdValidad", idValidador);
                    cmd.Parameters.AddWithValue("@id_calificacion", datosCliente.ID_Calificacion);
                    cmd.Parameters.AddWithValue("@tipoInversion", datosCliente.TipoInver);
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return true;
            }
            catch (SqlException ex)
            {
                return "Error: " + ex;
            }
        }

        public Object SavePYME(Pyme datosCliente, int opc, long idValidador)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("AddPyme", con);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@idCampana", datosCliente.Id);
                    cmd.Parameters.AddWithValue("@Folio", datosCliente.Folio);
                    cmd.Parameters.AddWithValue("@NumCliente", datosCliente.NumeroCliente);
                    cmd.Parameters.AddWithValue("@ApellidoPaterno", datosCliente.ApellidoPaterno);
                    cmd.Parameters.AddWithValue("@ApellidoMaterno", datosCliente.ApellidoMaterno);
                    cmd.Parameters.AddWithValue("@Nombre", datosCliente.Nombre);
                    cmd.Parameters.AddWithValue("@FechaNacimiento", datosCliente.FechaNacimiento);
                    cmd.Parameters.AddWithValue("@Rfc", datosCliente.RFC);
                    cmd.Parameters.AddWithValue("@Cp", datosCliente.CodigoPostal);
                    cmd.Parameters.AddWithValue("@Estado", datosCliente.Estado);
                    cmd.Parameters.AddWithValue("@Municipio", datosCliente.Municipio);
                    cmd.Parameters.AddWithValue("@Colonia", datosCliente.Colonia);
                    cmd.Parameters.AddWithValue("@Calle", datosCliente.Calle);
                    cmd.Parameters.AddWithValue("@NumeroExt", datosCliente.NumeroExterior);
                    cmd.Parameters.AddWithValue("@NumeroInt", datosCliente.NumeroInterior);
                    cmd.Parameters.AddWithValue("@Linea36", datosCliente.Linea36);
                    cmd.Parameters.AddWithValue("@Tasa36", datosCliente.Tasa36);
                    cmd.Parameters.AddWithValue("@Pago36", datosCliente.Pago36);
                    cmd.Parameters.AddWithValue("@Linea48", datosCliente.Linea48);
                    cmd.Parameters.AddWithValue("@Tasa48", datosCliente.Tasa48);
                    cmd.Parameters.AddWithValue("@Pago48", datosCliente.Pago48);
                    cmd.Parameters.AddWithValue("@Linea60", datosCliente.Linea60);
                    cmd.Parameters.AddWithValue("@Tasa60", datosCliente.Tasa60);
                    cmd.Parameters.AddWithValue("@Pago60", datosCliente.Pago60);
                    cmd.Parameters.AddWithValue("@Plazo", datosCliente.Plazo);
                    cmd.Parameters.AddWithValue("@MontoPromesa", datosCliente.MontoPromesa);
                    cmd.Parameters.AddWithValue("@FechaVicitaSucursal", datosCliente.FechaVicitaSucursal);
                    cmd.Parameters.AddWithValue("@Division", datosCliente.Division);
                    cmd.Parameters.AddWithValue("@Regional", datosCliente.Regional);
                    cmd.Parameters.AddWithValue("@Sucursal", datosCliente.Sucursal);
                    cmd.Parameters.AddWithValue("@NumeroSucursal", datosCliente.NumeroSucursal);
                    cmd.Parameters.AddWithValue("@LineaActual", datosCliente.LineaActual);
                    cmd.Parameters.AddWithValue("@LineaCLI", datosCliente.LineaCLI);
                    cmd.Parameters.AddWithValue("@CatAmortizable", datosCliente.CatAmortizable);
                    cmd.Parameters.AddWithValue("@CatRevolvente", datosCliente.CatRevolvente);
                    cmd.Parameters.AddWithValue("@LineaAmortizable", datosCliente.LineaAmortizable);
                    cmd.Parameters.AddWithValue("@TasaAmortizable", datosCliente.TasaAmortizable);
                    cmd.Parameters.AddWithValue("@PagoMenAmortizable", datosCliente.PagoMenAmortizable);
                    cmd.Parameters.AddWithValue("@LineaRevolvente", datosCliente.LineaRevolvente);
                    cmd.Parameters.AddWithValue("@TasaRevolvente", datosCliente.TasaRevolvente);
                    cmd.Parameters.AddWithValue("@LineaTotal", datosCliente.LineaTotal);
                    cmd.Parameters.AddWithValue("@opc", opc);
                    if (opc != 1)
                    {
                        cmd.Parameters.AddWithValue("@IdEstatusVenta", datosCliente.EstatusVenta);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@IdEstatusVenta", 0);
                    }
                    cmd.Parameters.AddWithValue("@IdValidad", idValidador);
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return true;
            }
            catch (SqlException ex)
            {
                return "error: " + ex;
            }
        }

        public Object SaveREDISPOSICION(Redisposicion datosCliente, int opc, long idValidador)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("AddRedisposicion", con);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@idCampana", datosCliente.Id);
                    cmd.Parameters.AddWithValue("@Estado", datosCliente.Estado);
                    cmd.Parameters.AddWithValue("@Municipio", datosCliente.Municipio);
                    cmd.Parameters.AddWithValue("@Colonia", datosCliente.Colonia);
                    cmd.Parameters.AddWithValue("@Calle", datosCliente.Calle);
                    cmd.Parameters.AddWithValue("@Numero_ext", datosCliente.NumeroExterior);
                    cmd.Parameters.AddWithValue("@Numero_int", datosCliente.NumeroInterior);
                    cmd.Parameters.AddWithValue("@NumCliente", datosCliente.NumeroCliente);
                    cmd.Parameters.AddWithValue("@Folio", datosCliente.Folio);
                    cmd.Parameters.AddWithValue("@ApellidoPaterno", datosCliente.ApellidoPaterno);
                    cmd.Parameters.AddWithValue("@ApellidoMaterno", datosCliente.ApellidoMaterno);
                    cmd.Parameters.AddWithValue("@Nombre", datosCliente.Nombre);
                    cmd.Parameters.AddWithValue("@FechaNacimiento", datosCliente.FechaNacimiento);
                    cmd.Parameters.AddWithValue("@RfcCliente", datosCliente.RFC);
                    cmd.Parameters.AddWithValue("@CpCliente", datosCliente.CodigoPostal);
                    cmd.Parameters.AddWithValue("@NoTargeta", datosCliente.NumeroTargeta);
                    cmd.Parameters.AddWithValue("@Producto", datosCliente.Producto);
                    cmd.Parameters.AddWithValue("@LineaCredito", datosCliente.LineaCredito);
                    cmd.Parameters.AddWithValue("@TasaOriginal", datosCliente.TasaOriginal);
                    cmd.Parameters.AddWithValue("@PlazoCredito", datosCliente.PlazoCredito);
                    cmd.Parameters.AddWithValue("@MontoDispersion", datosCliente.MontoDispersion);
                    cmd.Parameters.AddWithValue("@Pago36", datosCliente.Pago36);
                    cmd.Parameters.AddWithValue("@Pago48", datosCliente.Pago48);
                    cmd.Parameters.AddWithValue("@Pago60", datosCliente.Pago60);
                    cmd.Parameters.AddWithValue("@Incremento", datosCliente.Incremento);
                    cmd.Parameters.AddWithValue("@LineaActual", datosCliente.LineaActual);
                    cmd.Parameters.AddWithValue("@LineaNueva", datosCliente.LineaNueva);
                    cmd.Parameters.AddWithValue("@CantidadDisponer", datosCliente.CantidadDisponer);
                    cmd.Parameters.AddWithValue("@TelefonoCasa", (datosCliente.TelefonoCasa != null) ? datosCliente.TelefonoCasa : DBNull.Value.ToString());
                    cmd.Parameters.AddWithValue("@Ultimos3MesesUtilizandoBancanet", datosCliente.Ultimo3MesesUtilizandoBancaNet);
                    cmd.Parameters.AddWithValue("@TieneTDCCitibanamex ", datosCliente.TieneTDCCitibanamex);
                    cmd.Parameters.AddWithValue("@CodigoPostal", datosCliente.CodigoPostal);
                    cmd.Parameters.AddWithValue("@opc", opc);
                    if (opc != 1)
                    {
                        cmd.Parameters.AddWithValue("@IdEstatusVenta", datosCliente.EstatusVenta);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@IdEstatusVenta", 0);
                    }
                    cmd.Parameters.AddWithValue("@IdValidad", idValidador);
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return true;
            }
            catch (SqlException ex)
            {
                return "Error: " + ex;
            }
        }

        public Object SaveTDC(Tdc datosCliente, int opc, long idValidador)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                using (SqlConnection con = new SqlConnection(cadString))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("AddTDC", con);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@idCampana", datosCliente.Id);
                    cmd.Parameters.AddWithValue("@Folio", datosCliente.Folio);
                    cmd.Parameters.AddWithValue("@NumCliente", datosCliente.NumeroCliente);
                    cmd.Parameters.AddWithValue("@Producto", datosCliente.Producto);
                    cmd.Parameters.AddWithValue("@ApellidoPaterno", datosCliente.ApellidoPaterno);
                    cmd.Parameters.AddWithValue("@ApellidoMaterno", datosCliente.ApellidoMaterno);
                    cmd.Parameters.AddWithValue("@Nombre", datosCliente.Nombre);
                    cmd.Parameters.AddWithValue("@FechaNacimiento", datosCliente.FechaNacimiento);
                    cmd.Parameters.AddWithValue("@Rfc", datosCliente.RFC);

                    cmd.Parameters.AddWithValue("@Razon", datosCliente.Razon);
                    cmd.Parameters.AddWithValue("@Comentarios", datosCliente.Comentarios);
                    cmd.Parameters.AddWithValue("@Calle", datosCliente.Calle);
                    cmd.Parameters.AddWithValue("@NumeroExt", datosCliente.NumeroExterior);
                    cmd.Parameters.AddWithValue("@NumeroInt", datosCliente.NumeroInterior);
                    cmd.Parameters.AddWithValue("@Cp", datosCliente.CodigoPostal);
                    cmd.Parameters.AddWithValue("@Colonia", datosCliente.Colonia);
                    cmd.Parameters.AddWithValue("@Estado", datosCliente.Estado);
                    cmd.Parameters.AddWithValue("@Municipio", datosCliente.Municipio);
                    cmd.Parameters.AddWithValue("@Celular", (datosCliente.Celular != null) ? datosCliente.Celular : DBNull.Value.ToString());
                    cmd.Parameters.AddWithValue("@Telefono", datosCliente.Telefono);
                    cmd.Parameters.AddWithValue("@PaisNacimiento", datosCliente.PaisNacimiento);
                    cmd.Parameters.AddWithValue("@EntidadFederativa", datosCliente.EntidadFederativa);
                    cmd.Parameters.AddWithValue("@PaisNacionalidad", datosCliente.PaisNacionalidad);
                    cmd.Parameters.AddWithValue("@Genero", datosCliente.Genero);
                    cmd.Parameters.AddWithValue("@EdoCivil", datosCliente.EdoCivil);
                    cmd.Parameters.AddWithValue("@Escolaridad", datosCliente.Escolaridad);
                    cmd.Parameters.AddWithValue("@NumDependientes", datosCliente.NumDependientes);
                    cmd.Parameters.AddWithValue("@TipoVivienda", datosCliente.TipoVivienda);
                    cmd.Parameters.AddWithValue("@AniosResidencia", datosCliente.AniosResidencia);
                    cmd.Parameters.AddWithValue("@Email", datosCliente.email);
                    cmd.Parameters.AddWithValue("@NomEmp", datosCliente.NombreEmpresa);
                    cmd.Parameters.AddWithValue("@CalleEmp", datosCliente.CalleEmp);
                    cmd.Parameters.AddWithValue("@NumIntEmp", datosCliente.NumIntEmp);
                    cmd.Parameters.AddWithValue("@NumExtEmp", datosCliente.NumExtEmp);
                    cmd.Parameters.AddWithValue("@CpEmp", datosCliente.CodigoPostalEmp);
                    cmd.Parameters.AddWithValue("@ColoniaEmp", datosCliente.ColoniaEmp);
                    cmd.Parameters.AddWithValue("@EstadoEmp", datosCliente.EstadoEmp);
                    cmd.Parameters.AddWithValue("@DelegacionEmp", datosCliente.DelegacionEmp);
                    cmd.Parameters.AddWithValue("@Actividad", datosCliente.Actividad);
                    cmd.Parameters.AddWithValue("@Ocupacion", datosCliente.Ocupacion);
                    cmd.Parameters.AddWithValue("@TipoEmpleo", datosCliente.TipoEmpleo);
                    cmd.Parameters.AddWithValue("@TelefonoEmp", datosCliente.TelefonoEmp);
                    cmd.Parameters.AddWithValue("@Ext", datosCliente.Ext);
                    cmd.Parameters.AddWithValue("@AntiguedadAnios", datosCliente.AntiguedadAnios);
                    cmd.Parameters.AddWithValue("@AntiguedadMeses", datosCliente.AntiguedadMeses);
                    cmd.Parameters.AddWithValue("@IngresoMensual", datosCliente.IngresoMensual);
                    cmd.Parameters.AddWithValue("@CompIngresos", datosCliente.CompIngresos);
                    cmd.Parameters.AddWithValue("@TipoIdentificacion", datosCliente.TipoIdentificacion);
                    cmd.Parameters.AddWithValue("@CompDomicilio", datosCliente.ComprobanteDomicilio);
                    cmd.Parameters.AddWithValue("@Institucion1", datosCliente.Institucion1);
                    cmd.Parameters.AddWithValue("@TipoCuenta1", datosCliente.TipoCuenta1);
                    cmd.Parameters.AddWithValue("@Terminacion1", datosCliente.Terminacion1);
                    cmd.Parameters.AddWithValue("@Institucion2", datosCliente.Institucion2);
                    cmd.Parameters.AddWithValue("@TipoCuenta2", datosCliente.TipoCuenta2);
                    cmd.Parameters.AddWithValue("@Terminacion2", datosCliente.Terminacion2);
                    cmd.Parameters.AddWithValue("@Institucion3", datosCliente.Institucion3);
                    cmd.Parameters.AddWithValue("@TipoCuenta3", datosCliente.TipoCuenta3);
                    cmd.Parameters.AddWithValue("@Terminacion3", datosCliente.Terminacion3);
                    cmd.Parameters.AddWithValue("@MaternoRef1", datosCliente.MaternoRef1);
                    cmd.Parameters.AddWithValue("@PaternoRef1", datosCliente.PaternoRef1);
                    cmd.Parameters.AddWithValue("@NombreRef1", datosCliente.NombreRef1);
                    cmd.Parameters.AddWithValue("@ParentescoRef1", datosCliente.ParentescoRef1);
                    cmd.Parameters.AddWithValue("@TelefonoRef1", datosCliente.TelefonoRef1);
                    cmd.Parameters.AddWithValue("@ExtRef1", datosCliente.ExtensionReferencia1);
                    cmd.Parameters.AddWithValue("@MaternoRef2", datosCliente.MaternoRef2);
                    cmd.Parameters.AddWithValue("@PaternoRef2", datosCliente.PaternoRef2);
                    cmd.Parameters.AddWithValue("@NombreRef2", datosCliente.NombreRef2);
                    cmd.Parameters.AddWithValue("@ParentescoRef2", datosCliente.ParentescoRef2);
                    cmd.Parameters.AddWithValue("@TelefonoRef2", datosCliente.TelefonoRef2);
                    cmd.Parameters.AddWithValue("@ExtRef2", datosCliente.ExtensionReferencia2);
                    cmd.Parameters.AddWithValue("@Fecha_Visita_Sucursal", datosCliente.FechaVisitaSuc);
                    cmd.Parameters.AddWithValue("@Division", datosCliente.Division);
                    cmd.Parameters.AddWithValue("@Regional", datosCliente.Regional);
                    cmd.Parameters.AddWithValue("@Sucursal", datosCliente.Sucursal);
                    cmd.Parameters.AddWithValue("@NumeroSucursal", datosCliente.NumSucursal);
                    cmd.Parameters.AddWithValue("@Folio_ECS", datosCliente.FolioECS);
                    cmd.Parameters.AddWithValue("@RefBuro", datosCliente.RefBuro);
                    cmd.Parameters.AddWithValue("@EstatusAutenticacion", datosCliente.EstatusAutenticacion);

                    cmd.Parameters.AddWithValue("@EstatusFrontTMK", datosCliente.EstatusFrontTMK);
                    cmd.Parameters.AddWithValue("@EstatusFrontTMK2", datosCliente.EstatusFrontTMK2);    //Actualizacion 21 de marzo del 2019

                    cmd.Parameters.AddWithValue("@CausaDeclinacion", datosCliente.CausaDeclinacion);
                    cmd.Parameters.AddWithValue("@EstatusDeclinacion", datosCliente.EstatusDeclinacion);
                    cmd.Parameters.AddWithValue("@TelefonoProc", datosCliente.TelefonoProc);
                    cmd.Parameters.AddWithValue("@TipoPersona", datosCliente.TipoPersona);
                    cmd.Parameters.AddWithValue("@TipoTarjeta", datosCliente.TipoTargeta);
                    cmd.Parameters.AddWithValue("@TipoTarjetaBancaria", datosCliente.TipoTargetaBancaria);
                    cmd.Parameters.AddWithValue("@TipoTarjetaDepartamental", datosCliente.TipoTargetaDepartamental);
                    cmd.Parameters.AddWithValue("@TipoTarjetaComercial", datosCliente.TipoTargetaComercial);
                    cmd.Parameters.AddWithValue("@SinTDC", datosCliente.SinTDC);
                    cmd.Parameters.AddWithValue("@TipoRecibosnomina", datosCliente.TipoRecibidosNomina);
                    cmd.Parameters.AddWithValue("@TipoEdoCuenta", datosCliente.TipoEstadoCuenta);
                    cmd.Parameters.AddWithValue("@LineaCredito", datosCliente.LineaCredito);
                    cmd.Parameters.AddWithValue("@Antiguedad", datosCliente.Antiguedad);
                    cmd.Parameters.AddWithValue("@Ingresos", datosCliente.Ingresos);
                    cmd.Parameters.AddWithValue("@Buro", datosCliente.Buro);
                    cmd.Parameters.AddWithValue("@EstatusFinal", datosCliente.EstatusFinal);
                    cmd.Parameters.AddWithValue("@ProcesoPendiente", datosCliente.ProcesoPendiente);
                    cmd.Parameters.AddWithValue("@Canceladas", datosCliente.Canceladas);
                    cmd.Parameters.AddWithValue("@ComentariosProc", datosCliente.ComentariosProc);
                    if (opc != 1)
                    {
                        cmd.Parameters.AddWithValue("@IdEstatusVenta", datosCliente.EstatusVenta);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@IdEstatusVenta", 0);
                    }
                    cmd.Parameters.AddWithValue("@opc", opc);
                    cmd.Parameters.AddWithValue("@Curp", datosCliente.Curp);
                    cmd.Parameters.AddWithValue("@IdValidad", idValidador);
                    cmd.Parameters.AddWithValue("@Tel_Contacto", datosCliente.Tel_Contacto);
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return true;
            }
            catch (SqlException ex)
            {
                return "Error: " + ex;
            }
        }

        public bool CheckVentas(string folio)
        {
            bool v = false;
            string cadString = ConfigurationManager.ConnectionStrings["MEDCnn"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cadString))
            {
                con.Open();
                SqlCommand com = new SqlCommand("ssp_CheckVentas", con);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@Folio", folio);
                SqlDataReader r = com.ExecuteReader();
                while (r.Read())
                {
                    v = (r["Existe"].ToString() == "1") ? true : false;
                }
                con.Close();
            }
            return v;
        }

        //PROCESO AGREGADO PARA GUARDAR CALIFICACIONES 11/02/2023
        public Object SaveCalif(string FOLIO, string NUMERO, int CALIFIC)
        {
            try
            {
                string conexion = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                using (SqlConnection con = new SqlConnection(conexion))
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand("sp_AddMO360", con);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Folio", FOLIO);
                    cmd.Parameters.AddWithValue("@NumCliente", NUMERO);
                    cmd.Parameters.AddWithValue("@Calificacion", CALIFIC);
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
            }
            catch (Exception ex)
            {
                return "Error: " + ex;
            }
            return true;
        }
    }
}