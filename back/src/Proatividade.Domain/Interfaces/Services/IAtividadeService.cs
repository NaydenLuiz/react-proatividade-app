using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Proatividade.Domain.Entities;
namespace Proatividade.Domain.Interfaces.Services
{
    public interface IAtividadeService
    {
        Task<Atividade> AddAtividade(Atividade atividade);
        Task<Atividade> UpdateAtividade(Atividade atividade);
        Task<IList<Atividade>> GetAllAtividadesAsync();
        Task<Atividade> GetByIdAtividadeAsync(int id);
        Task<bool> DeleteAtividadeAsync(int id);
        Task<bool> CompleteAtividadeAsync(Atividade atividade);

    }
}