using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CRM_V1.Models
{
    public class Client
    {
        public long Id { get; set; }
        [Required]
        public string Number { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string ApellidoPaterno { get; set; }
        [Required]
        public string ApellidoMaterno { get; set; }
        //[DataType(DataType.Date)]
        public DateTime FechaNacimiento { get; set; }
        public string RFC { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public List<Campania> Campanias { get; set; }
    }
}