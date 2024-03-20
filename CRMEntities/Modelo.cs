namespace CRMEntities
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Modelo : DbContext
    {
        public Modelo()
            : base("name=Modelo")
        {}

        public virtual DbSet<cat_EstadosMunicipios_json> cat_EstadosMunicipios_json { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<cat_EstadosMunicipios_json>()
                .Property(e => e.Texto)
                .IsUnicode(false);
        }
    }
}
