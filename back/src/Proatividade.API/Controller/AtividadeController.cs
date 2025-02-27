using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Proatividade.API.Data;
using Proatividade.API.Models;

namespace Proatividade.API.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        private readonly DataContext _context;
        public AtividadeController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return _context.Atividades;
        }

        [HttpGet("{id}")]
        public Atividade Get(int id)
        {
            return _context.Atividades.FirstOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public IEnumerable<Atividade> Post(Atividade atividade)
        {
            _context.Atividades.Add(atividade);
            if(_context.SaveChanges() > 0)
            {
                return _context.Atividades;
            }
            
            throw new Exception("Não foi possível salvar a atividade");
        }

        [HttpPut]
        public Atividade Put(int id, Atividade atividade)
        {
            if(atividade.Id != id)
            {
                throw new Exception("Você está tentando atualizar uma atividade que não existe");
            }

            _context.Update(atividade);

            if(_context.SaveChanges() > 0)
            {
                return _context.Atividades.FirstOrDefault(s=>s.Id == atividade.Id);
            }
            
            throw new Exception("Não foi possível salvar a atividade");
        }


        [HttpDelete]
        public bool Delete(int Id)
        {
            var atividade = _context.Atividades.FirstOrDefault(x => x.Id == Id);
            if(atividade == null)
            {
                throw new Exception("Você está tentando deletar uma atividade que não existe");
            }

            _context.Remove(atividade);

            if(_context.SaveChanges() > 0)
            {
                return true;
            }else{
                return false;
            }
            
            
        }

    }
}