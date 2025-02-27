using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Proatividade.API.Data;

namespace Proatividade.API.Models
{
    public class Atividade
    {
        public int Id{get;set;}
        public string Titulo{get;set;}
        public string Descricao{get;set;}
        public Prioridade Prioridade{get;set;}
    }
}