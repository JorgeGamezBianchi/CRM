using CRM_V1.Models;
using Newtonsoft.Json;
using RestSharp;
using RestSharp.Deserializers;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Mvc;

namespace CRM_V1.Controllers
{
    public class UserController : Controller
    {
        public static TipoUsuario Tipo;
        [Route("/User/LogIn")]
        public Object LogIn(User user)
        {
            try
            {
                string cadString = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
                SqlConnection con = new SqlConnection(cadString);
                con.Open();
                SqlCommand cmd = new SqlCommand("LogIn", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@UserName", user.UserName);
                cmd.Parameters.AddWithValue("@Password", user.Password);
                SqlDataReader dataReader = cmd.ExecuteReader();
                if (!dataReader.HasRows)
                {
                    return ToJson("No existe");
                }
                dataReader.Read();
                user = new User
                {
                    Password = dataReader["PASSWORD"].ToString(),
                    UserName = dataReader["Usuario"].ToString(),
                    Id = long.Parse(dataReader["Id_Usuario"].ToString()),
                    Tipo = (TipoUsuario)int.Parse(dataReader["Id_Tipo"].ToString()),
                    Name = dataReader["Nombre"].ToString(),
                    LastName1 = dataReader["ApPaterno"].ToString(),
                    LastName2 = dataReader["ApMaterno"].ToString()
                };

                Session.Timeout = 20000;
                Session["Tipo"] = user.Tipo;
                if (user.Tipo == TipoUsuario.RVT)
                {
                    Session["IdUser"] = user.Id;
                }
                else
                {
                    Session["IdValidador"] = user.Id;
                }
                Tipo = user.Tipo;
                return ToJson(user);
            }
            catch (Exception ex)
            {
                return "Error: " + ex;
            }
        }

        public JsonResult ToJson(Object obj)
        {
            //return null;
            return Json(obj, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Aviso(string num,string folio)
        {
            //string responseBody = "";


            //var url = $"https://medc.directo.com:543/api/v1/soundboard/sendAudio";
            //var request = (HttpWebRequest)WebRequest.Create(url);
            //string json = JsonConvert.SerializeObject(new
            //{
            //    user = "med-soundboard",
            //    token = "doe5d55fc19bd0f149f438c614fa5c7551mexp",
            //    number = num,
            //    idClient = "0",
            //    product = "89",
            //    idAudio = "9996"
            //});
            //request.Method = "POST";
            //request.ContentType = "application/json";
            //request.Accept = "application/json";
            //using (var streamWriter = new StreamWriter(request.GetRequestStream()))
            //{
            //    streamWriter.Write(json);
            //    streamWriter.Flush();
            //    streamWriter.Close();
            //}
            //    using (WebResponse response = request.GetResponse())
            //    {
            //        using (Stream strReader = response.GetResponseStream())
            //        {

            //            using (StreamReader objReader = new StreamReader(strReader))
            //            {
            //                 responseBody = objReader.ReadToEnd();
            //            SendStatusResponse sendStatusResponse = new JsonSerializer().des .Deserialize<SendStatusResponse>(responseBody);
            //            // Do something with responseBody
            //            //Console.WriteLine(responseBody);
            //        }
            //        }
            //    }

            var client = new RestClient("https://medc.directo.com:543/api/v1/soundboard/sendAudio");
            client.Timeout = -1;
            var request = new RestRequest(Method.POST);
            request.AddParameter("user", "med-soundboard");
            request.AddParameter("token", "doe5d55fc19bd0f149f438c614fa5c7551mexp");
            request.AddParameter("number", num);
            request.AddParameter("idClient", "0");
            request.AddParameter("product", "04");
            request.AddParameter("idAudio", "9996");
            IRestResponse response = client.Execute(request);
            SendStatusResponse sendStatusResponse = new JsonDeserializer().Deserialize<SendStatusResponse>(response);
            GuardarAviso(num,0,sendStatusResponse.message,sendStatusResponse.statusCode,04,folio);
            return Json(sendStatusResponse, JsonRequestBehavior.AllowGet);
        }

        public class SendStatusResponse
        {
            public string statusCode { get; set; }

            public string message { get; set; }
        }

        public void GuardarAviso(string numeroTel, int idCliente, string respuesta, string codigo, int producto, string folio)
        {
            string cs = ConfigurationManager.ConnectionStrings["Data"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();
                SqlCommand comm = new SqlCommand("isp_InsertLogAviso", con);
                comm.CommandType = CommandType.StoredProcedure;
                comm.Parameters.AddWithValue("@numero", numeroTel);
                comm.Parameters.AddWithValue("@idCliente", idCliente);
                comm.Parameters.AddWithValue("@Respuesta", respuesta);
                comm.Parameters.AddWithValue("@codigo", codigo);
                comm.Parameters.AddWithValue("@producto", producto);
                comm.Parameters.AddWithValue("@Folio",(folio != null) ? folio : DBNull.Value.ToString());
                comm.ExecuteNonQuery();
            }
        }
    }
}