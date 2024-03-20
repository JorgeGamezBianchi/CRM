namespace CRMEntities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class cat_EstadosMunicipios_json
    {
        [Key]
        public int Id_Estado { get; set; }

        [StringLength(50)]
        public string Texto { get; set; }

        public string Municipios { get; set; }
    }
}
