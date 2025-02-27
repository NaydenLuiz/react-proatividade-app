using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Proatividade.API.Models;

namespace Proatividade.API.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        [HttpGet]
        public Atividade get()
        {
            return new Atividade();
        }

        [HttpPost]
        public Atividade post(Atividade atividade)
        {
            atividade.Id =1;
            return atividade;
        }

        [HttpPut]
        public Atividade put(Atividade atividade)
        {
            return atividade;
        }


        [HttpDelete]
        public Atividade Delete(int Id)
        {
            return new Atividade();
        }

    }
}