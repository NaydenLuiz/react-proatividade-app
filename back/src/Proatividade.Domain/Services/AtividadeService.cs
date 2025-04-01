using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Proatividade.Domain.Interfaces.Repositories;
using Proatividade.Domain.Interfaces.Services;
using Proatividade.Domain.Entities;
namespace Proatividade.Domain.Services
{
    public class AtividadeService : IAtividadeService
    {
        private readonly IAtividadeRepo _atividadeRepo;

        public AtividadeService(IAtividadeRepo atividadeRepo)
        {
            _atividadeRepo = atividadeRepo;
        }

        public async Task<Atividade> AddAtividade(Atividade atividade)
        {
            if(await _atividadeRepo.GetByTituloAsync(atividade.Titulo) is not null)
            {
                throw new Exception("Já existe uma atividade com esse mesmo titulo");
            }

            if(await _atividadeRepo.GetByIdAsync(atividade.Id) is null)
            {
                _atividadeRepo.Add(atividade);
                if(await _atividadeRepo.SaveChangesAsync())
                {
                    return atividade;
                }
            }

            return null;
        }

        public async Task<bool> CompleteAtividadeAsync(Atividade atividade)
        {
            if(atividade is not null)
            {
                atividade.Concluir();
                _atividadeRepo.Update<Atividade>(atividade);
                return await _atividadeRepo.SaveChangesAsync();
            }

            return false;
        }

        public async Task<bool> DeleteAtividadeAsync(int id)
        {
            var atividade = await _atividadeRepo.GetByIdAsync(id);
            if(atividade  == null)
            {
                 throw new Exception("Atividade não encontrada");
            }
            
            _atividadeRepo.Delete(atividade);
            
            return await _atividadeRepo.SaveChangesAsync();
        }

        public async Task<IList<Atividade>> GetAllAtividadesAsync()
        {
            return await _atividadeRepo.GetAllAsync();
        }

        public async Task<Atividade> GetByIdAtividadeAsync(int id)
        {
            try
            {
                var atividade = await _atividadeRepo.GetByIdAsync(id);
                return atividade;
            }
            catch (System.Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Atividade> UpdateAtividade(Atividade atividade)
        {
            if(atividade.DataConclusao != null)
            {
                throw new Exception("Não é possível alterar uma atividade já concluída");
            }
            if(await _atividadeRepo.GetByIdAsync(atividade.Id) is not null)
            {
                _atividadeRepo.Update(atividade);
                await _atividadeRepo.SaveChangesAsync();
                return atividade;
            }

            return null;   
        }
    }
}