using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Proatividade.Data.Context;
using Proatividade.Domain.Entities;
using Proatividade.Domain.Interfaces.Services;

namespace Proatividade.API.Controller
{
   
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
         private readonly IAtividadeService _atividadeService;
        public AtividadeController(IAtividadeService atividadeService)
        {
            _atividadeService = atividadeService;
        }


        [HttpGet]
        public async Task<IEnumerable<Atividade>> Get()
        {
            try
            {
                return await _atividadeService.GetAllAtividadesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Não foi possível listar as atividades", ex);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var atividade = await _atividadeService.GetByIdAtividadeAsync(id);
                if(atividade == null)
                {
                    return NoContent();
                }
                return Ok(atividade);
            }
            catch(Exception ex)
            {
                throw new Exception("Não foi possível listar a atividade", ex);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Atividade atividade)
        {
            var result = await _atividadeService.AddAtividade(atividade);
            if(result == null)
            {
                return NoContent();
            }
            return  Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Atividade atividade)
        {
            if(id != atividade.Id)
            {
                return Conflict("Os ids não conferem");
            }

            var _atividade = await _atividadeService.GetByIdAtividadeAsync(id);
            if(_atividade == null) return NoContent();

            try
            {
                var result = await _atividadeService.UpdateAtividade(atividade);
                return Ok(result);
            }
            catch(Exception ex)
            {
                throw new Exception("Não foi possível atualizar a atividade", ex);
            }
            
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult>Delete(int id)
        {
            try
            {
                var atividade = await _atividadeService.GetByIdAtividadeAsync(id);
                if(atividade == null) return NoContent();                
                var result = await _atividadeService.DeleteAtividadeAsync(id);
                if(result){
                    return Ok("Atividade deletada com sucesso");
                }else{
                    return NoContent();
                }
            }
            catch(Exception ex)
            {
                throw new Exception("Não foi possível deletar a atividade", ex);
            }
        }

    }
}