using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRM_V1.Controllers
{
    public class ClassRFC
    {
        static string apellidoP, apellidoM, respuesta, letra, esPrimera, paterno, materno, nombrerfc, RFC, RFC1, RFC2, pat, mat, nom,anio, mes, dia, txtRFC;
        static int numpalab, numpalab2, numpalab1;
        public static string GeneraRFC(string txtNombre, string txtpaterno, string txtmaterno, string txtFecNac)
        {
            if (string.IsNullOrEmpty(txtNombre) || string.IsNullOrEmpty(txtFecNac))
            {
            }
            else
            {
                {
                    if (txtNombre.Contains(" "))
                    {
                        char[] delimiterChars = { ' ' };
                        string text = txtNombre;
                        string[] words = text.Split(delimiterChars);

                        numpalab = words.Length;

                        if (numpalab == 2)
                        {
                            if (words[0] == "JOSE")
                            {
                                {
                                    nom = Convert.ToString(txtNombre.Substring(5, 1));
                                }
                            }
                            else if (words[0] == "MARIA")
                            {
                                {
                                    nom = Convert.ToString(txtNombre.Substring(6, 1));
                                }
                            }
                            else
                            {
                                nom = Convert.ToString(txtNombre.Substring(0, 1));
                            }
                        }
                        else if (numpalab == 3)
                        {
                            if (words[0] == "JOSE" & words[1] != "DE")
                            {
                                {
                                    nom = Convert.ToString(txtNombre.Substring(5, 1));
                                }
                            }
                            else if (words[0] == "JOSE" & words[1] == "DE")
                            {
                                {
                                    nom = Convert.ToString(txtNombre.Substring(8, 1));
                                }
                            }
                            else if (words[0] == "JOSE" & words[1] != "DEL")
                            {
                                {
                                    nom = Convert.ToString(txtNombre.Substring(5, 1));
                                }
                            }
                            else if (words[0] == "JOSE" & words[1] == "DEL")
                            {
                                {
                                    nom = Convert.ToString(txtNombre.Substring(9, 1));
                                }
                            }
                            else if (words[0] == "MARIA" & words[1] != "DEL")
                            {
                                {
                                    nom = Convert.ToString(txtNombre.Substring(6, 1));
                                }
                            }
                            else if (words[0] == "MARIA" & words[1] == "DEL")
                            {
                                {
                                    nom = Convert.ToString(txtNombre.Substring(10, 1));
                                }
                            }
                            else if (words[0] == "MARIA" & words[1] != "DE")
                            {
                                {
                                    nom = Convert.ToString(txtNombre.Substring(6, 1));
                                }
                            }
                            else if (words[0] == "MARIA" & words[1] == "DE")
                            {
                                {
                                    nom = Convert.ToString(txtNombre.Substring(9, 1));
                                }
                            }
                            else
                            {
                                nom = Convert.ToString(txtNombre.Substring(0, 1));
                            }
                        }
                        else if (numpalab == 4)
                        {
                            if (words[0] == "JOSE")
                            {
                                {
                                    nom = Convert.ToString(txtNombre.Substring(5, 1));
                                }
                            }
                            else if (words[0] == "MARIA" & words[1] != "DE" & words[2] != "LOS")
                            {
                                {
                                    nom = Convert.ToString(txtNombre.Substring(6, 1));
                                }
                            }
                            else if (words[0] == "MARIA" & words[1] == "DE" & words[2] == "LOS")
                            {
                                {
                                    nom = Convert.ToString(txtNombre.Substring(13, 1));
                                }
                            }
                            else if (words[0] == "MARIA" & words[1] != "DE" & words[2] != "LAS")
                            {
                                {
                                    nom = Convert.ToString(txtNombre.Substring(6, 1));
                                }
                            }
                            else if (words[0] == "MARIA" & words[1] == "DE" & words[2] == "LAS")
                            {
                                {
                                    nom = Convert.ToString(txtNombre.Substring(13, 1));
                                }
                            }
                            else
                            {
                                nom = Convert.ToString(txtNombre.Substring(0, 1));
                            }

                        }
                    }
                    else
                    {
                        nom = Convert.ToString(txtNombre.Substring(0, 1));
                    }

                    if (string.IsNullOrEmpty(txtpaterno))
                    {
                        pat = null;
                        nom = Convert.ToString(txtNombre.Substring(0, 2));
                        mat = Convert.ToString(txtmaterno.Substring(0, 2));
                        respuesta = null;
                    }
                    else if (txtpaterno.Contains(" "))
                    {
                        char[] delimiterChars1 = { ' ' };
                        string text1 = txtpaterno;
                        string[] words1 = text1.Split(delimiterChars1);

                        numpalab1 = words1.Length;

                        if (numpalab1 == 1)
                        {

                            if (txtpaterno.Length > 1 & txtpaterno.Length <= 2)
                            {
                                pat = Convert.ToString(txtpaterno.Substring(0, 1));
                                mat = Convert.ToString(txtmaterno.Substring(0, 1));
                                nom = Convert.ToString(txtNombre.Substring(0, 2));
                            }
                            else
                            {
                                {
                                    pat = Convert.ToString(txtpaterno.Substring(0, 1));
                                }
                                respuesta = "";
                                apellidoP = txtpaterno;
                                esPrimera = apellidoP.Remove(0, 1);
                                for (int i = 0; i <= esPrimera.Length; i++)
                                {
                                    letra = esPrimera.Substring(i, 1);
                                    if (letra == "a" || letra == "A" || letra == "e" || letra == "E" || letra == "i" || letra == "I" || letra == "o" || letra == "O" || letra == "u" || letra == "U")
                                    {
                                        respuesta = letra;
                                        break;
                                    }
                                }
                            }
                        }
                        else if (numpalab1 == 2)
                        {
                            if (words1[0] == "DEL")
                            {
                                {
                                    pat = Convert.ToString(txtpaterno.Substring(4, 1));
                                }
                                respuesta = "";
                                apellidoM = txtpaterno;
                                esPrimera = apellidoM.Remove(0, 5);
                                for (int i = 0; i <= esPrimera.Length; i++)
                                {
                                    letra = esPrimera.Substring(i, 1);
                                    if (letra == "a" || letra == "A" || letra == "e" || letra == "E" || letra == "i" || letra == "I" || letra == "o" || letra == "O" || letra == "u" || letra == "U")
                                    {
                                        respuesta = letra;
                                        break;
                                    }
                                }
                            }
                            else if (words1[0] == "DE")
                            {
                                {
                                    pat = Convert.ToString(txtpaterno.Substring(4, 1));
                                }
                                respuesta = "";
                                apellidoM = txtpaterno;
                                esPrimera = apellidoM.Remove(0, 5);
                                for (int i = 0; i <= esPrimera.Length; i++)
                                {
                                    letra = esPrimera.Substring(i, 1);
                                    if (letra == "a" || letra == "A" || letra == "e" || letra == "E" || letra == "i" || letra == "I" || letra == "o" || letra == "O" || letra == "u" || letra == "U")
                                    {
                                        respuesta = letra;
                                        break;
                                    }
                                }
                            }
                            else
                            {
                                {
                                    pat = Convert.ToString(txtpaterno.Substring(0, 1));
                                }
                                respuesta = "";
                                apellidoP = txtpaterno;
                                esPrimera = apellidoP.Remove(0, 1);
                                for (int i = 0; i <= esPrimera.Length; i++)
                                {
                                    letra = esPrimera.Substring(i, 1);
                                    if (letra == "a" || letra == "A" || letra == "e" || letra == "E" || letra == "i" || letra == "I" || letra == "o" || letra == "O" || letra == "u" || letra == "U")
                                    {
                                        respuesta = letra;
                                        break;
                                    }
                                }
                            }
                        }
                        else if (numpalab1 == 3)
                        {
                            if (words1[0] == "DE" & words1[1] == "LA" & (txtpaterno.Length > 0 & txtpaterno.Length == 7))
                            {
                                if (txtNombre.Contains(" "))
                                {
                                    char[] delimiterChars = { ' ' };
                                    string text = txtNombre;
                                    string[] words = text.Split(delimiterChars);

                                    numpalab = words.Length;

                                    if (numpalab == 2)
                                    {
                                        if (words[0] == "JOSE")
                                        {
                                            {
                                                pat = Convert.ToString(txtpaterno.Substring(6, 1));
                                                mat = Convert.ToString(txtmaterno.Substring(0, 1));
                                                nom = Convert.ToString(txtNombre.Substring(5, 2));
                                            }
                                        }
                                        else if (words[0] == "MARIA")
                                        {
                                            {
                                                pat = Convert.ToString(txtpaterno.Substring(6, 1));
                                                mat = Convert.ToString(txtmaterno.Substring(0, 1));
                                                nom = Convert.ToString(txtNombre.Substring(6, 2));
                                            }
                                        }
                                        else
                                        {
                                            pat = Convert.ToString(txtpaterno.Substring(6, 1));
                                            mat = Convert.ToString(txtmaterno.Substring(0, 1));
                                            nom = Convert.ToString(txtNombre.Substring(0, 1));
                                        }
                                    }
                                }
                                else
                                {
                                    pat = Convert.ToString(txtpaterno.Substring(6, 1));
                                    mat = Convert.ToString(txtmaterno.Substring(0, 1));
                                    nom = Convert.ToString(txtNombre.Substring(0, 2));
                                }
                            }
                            else if (words1[0] == "DE" & words1[1] == "LA")
                            {
                                {
                                    pat = Convert.ToString(txtpaterno.Substring(6, 1));
                                }
                                respuesta = "";
                                apellidoM = txtpaterno;
                                esPrimera = apellidoM.Remove(0, 7);
                                for (int i = 0; i <= esPrimera.Length; i++)
                                {
                                    letra = esPrimera.Substring(i, 1);
                                    if (letra == "a" || letra == "A" || letra == "e" || letra == "E" || letra == "i" || letra == "I" || letra == "o" || letra == "O" || letra == "u" || letra == "U")
                                    {
                                        respuesta = letra;
                                        break;
                                    }
                                }
                            }
                            else if (words1[0] == "DE" & words1[1] == "LOS")
                            {
                                {
                                    pat = Convert.ToString(txtpaterno.Substring(7, 1));
                                }
                                respuesta = "";
                                apellidoM = txtpaterno;
                                esPrimera = apellidoM.Remove(0, 8);
                                for (int i = 0; i <= esPrimera.Length; i++)
                                {
                                    letra = esPrimera.Substring(i, 1);
                                    if (letra == "a" || letra == "A" || letra == "e" || letra == "E" || letra == "i" || letra == "I" || letra == "o" || letra == "O" || letra == "u" || letra == "U")
                                    {
                                        respuesta = letra;
                                        break;
                                    }
                                }
                            }
                            else
                            {
                                {
                                    pat = Convert.ToString(txtpaterno.Substring(0, 1));
                                }
                                respuesta = "";
                                apellidoP = txtpaterno;
                                esPrimera = apellidoP.Remove(0, 1);
                                for (int i = 0; i <= esPrimera.Length; i++)
                                {
                                    letra = esPrimera.Substring(i, 1);
                                    if (letra == "a" || letra == "A" || letra == "e" || letra == "E" || letra == "i" || letra == "I" || letra == "o" || letra == "O" || letra == "u" || letra == "U")
                                    {
                                        respuesta = letra;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    else
                    {
                        if (txtpaterno.Length > 1 & txtpaterno.Length <= 2)
                        {
                            pat = Convert.ToString(txtpaterno.Substring(0, 1));
                            mat = Convert.ToString(txtmaterno.Substring(0, 1));
                            nom = Convert.ToString(txtNombre.Substring(0, 2));
                        }
                        else
                        {
                            {
                                pat = Convert.ToString(txtpaterno.Substring(0, 1));
                            }
                            respuesta = "";
                            apellidoP = txtpaterno;
                            esPrimera = apellidoP.Remove(0, 1);
                            for (int i = 0; i <= esPrimera.Length; i++)
                            {
                                letra = esPrimera.Substring(i, 1);
                                if (letra == "a" || letra == "A" || letra == "e" || letra == "E" || letra == "i" || letra == "I" || letra == "o" || letra == "O" || letra == "u" || letra == "U")
                                {
                                    respuesta = letra;
                                    break;
                                }
                            }
                        }
                    }

                    if (string.IsNullOrEmpty(txtmaterno))
                    {
                        pat = Convert.ToString(txtpaterno.Substring(0, 2));
                        nom = Convert.ToString(txtNombre.Substring(0, 2));
                        mat = null;
                        respuesta = null;
                    }
                    else if (txtmaterno.Contains(" "))
                    {
                        char[] delimiterChars2 = { ' ' };
                        string text2 = txtmaterno;
                        string[] words2 = text2.Split(delimiterChars2);

                        numpalab2 = words2.Length;

                        if (numpalab2 == 2)
                        {
                            if (words2[0] == "DEL")
                            {
                                {
                                    mat = Convert.ToString(txtmaterno.Substring(4, 1));
                                }
                            }
                            else if (words2[0] == "DE")
                            {
                                {
                                    mat = Convert.ToString(txtmaterno.Substring(3, 1));
                                }
                            }
                            else
                            {
                                mat = Convert.ToString(txtmaterno.Substring(0, 1));
                            }
                        }
                        else if (numpalab2 == 3)
                        {
                            if (words2[0] == "DE" & words2[1] == "LA")
                            {
                                {
                                    mat = Convert.ToString(txtmaterno.Substring(6, 1));
                                }
                            }
                            else if (words2[0] == "DE" & words2[1] == "LOS")
                            {
                                {
                                    mat = Convert.ToString(txtmaterno.Substring(7, 1));
                                }
                            }
                            else if (words2[0] == "DE" & words2[1] == "LAS")
                            {
                                {
                                    mat = Convert.ToString(txtmaterno.Substring(7, 1));
                                }
                            }
                            else
                            {
                                mat = Convert.ToString(txtmaterno.Substring(0, 1));
                            }
                        }
                    }
                    else

                    {
                        mat = Convert.ToString(txtmaterno.Substring(0, 1));
                    }

                }
                anio = Convert.ToString(txtFecNac.Substring(2, 2));
                mes = Convert.ToString(txtFecNac.Substring(5, 2));
                dia = Convert.ToString(txtFecNac.Substring(8, 2));
                RFC = string.Concat(pat, respuesta, mat, nom);
                txtRFC = RFC;
                if (RFC == "BUEI" || RFC == "BUEY" || RFC == "CACA" || RFC == "CACO" || RFC == "CAGA" || RFC == "CAGO" || RFC == "CAKA" || RFC == "COGE" || RFC == "COJA" || RFC == "COJE" || RFC == "COJI" || RFC == "COJO" || RFC == "CULO" || RFC == "FETO" || RFC == "GUEY" || RFC == "JOTO" || RFC == "KOGE" || RFC == "KOJO" || RFC == "KAKA" || RFC == "KULO"
                 || RFC == "MAME" || RFC == "MAMO" || RFC == "MEAR" || RFC == "MEON" || RFC == "MION" || RFC == "MOCO" || RFC == "MULA" || RFC == "PEDA" || RFC == "PEDO" || RFC == "PENE" || RFC == "PUTA" || RFC == "PUTO" || RFC == "KACA" || RFC == "KACO" || RFC == "KAGA" || RFC == "KAGO" || RFC == "QULO" || RFC == "RATA" || RFC == "RUIN")
                {
                    if (nom.Length == 1)
                    {
                        nom = "X";
                    }
                    else if (nom.Length == 2)
                    {

                    }
                    RFC1 = string.Concat(pat, respuesta, mat, nom, anio, mes, dia);
                    txtRFC = RFC1;
                }
                else
                {
                    RFC2 = string.Concat(RFC, anio, mes, dia);
                    txtRFC = RFC2;
                }
            }
            return txtRFC;
        }
    }
}