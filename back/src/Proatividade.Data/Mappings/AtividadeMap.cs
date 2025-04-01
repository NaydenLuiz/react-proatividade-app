using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Proatividade.Domain.Entities;
namespace Proatividade.Data.Mappings
{
    public class AtividadeMap : IEntityTypeConfiguration<Atividade>
    {
        public void Configure(EntityTypeBuilder<Atividade> builder)
        {
            builder.ToTable("Atividades");
            
            builder.Property(x => x.Titulo).HasColumnType("varchar(100)");
            builder.Property(x => x.Descricao).HasColumnType("varchar(255)");
        }
    }
}