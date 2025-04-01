using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Proatividade.Domain.Entities;
namespace Proatividade.Domain.Interfaces.Repositories
{
    public interface IAtividadeRepo : IGeralRepo
    {
        Task<IList<Atividade>> GetAllAsync();
        Task<Atividade> GetByIdAsync(int id);
        Task<Atividade> GetByTituloAsync(string titulo);

    }
}