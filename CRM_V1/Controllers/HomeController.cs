using CRM_V1.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CRM_V1.Controllers
{
    public class HomeController : Controller
    {
        string cadString = ConfigurationManager.ConnectionStrings["MEDCnn"].ConnectionString;

        public JsonResult ToJson(Object obj)
        {
            //return null;
            return Json(obj, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Login()
        {
            return View();
        }

        public ActionResult Principal()
        {
            return View();
        }



        [HttpGet]
        public Object LibraVenta()
        {
            List<LibraViajero> libraVenta = new List<LibraViajero>();
            using (SqlConnection cn = new SqlConnection(cadString))
            {
                cn.Open();
                SqlCommand cmd = new SqlCommand("usp_QLibraVenta", cn);
                cmd.CommandType = CommandType.StoredProcedure;
                SqlDataReader drd = cmd.ExecuteReader();
                while (drd.Read())
                {
                    libraVenta.Add(new LibraViajero
                    {
                        Venta = drd["CveFolio"].ToString(),
                    });
                }
            }

            return ToJson(libraVenta);
        }



        [HttpGet]
        public Object ViajeroVenta()
        {
            List<LibraViajero> libraVenta = new List<LibraViajero>();
            using (SqlConnection cn = new SqlConnection(cadString))
            {
                cn.Open();
                SqlCommand cmd = new SqlCommand("usp_QViajeroVenta", cn);
                cmd.CommandType = CommandType.StoredProcedure;
                SqlDataReader drd = cmd.ExecuteReader();
                while (drd.Read())
                {
                    libraVenta.Add(new LibraViajero
                    {
                        Venta = drd["CveFolio"].ToString(),
                    });
                }
            }

            return ToJson(libraVenta);
        }

    }
}