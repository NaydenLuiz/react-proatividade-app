using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Proatividade.Domain.Entities;
namespace Proatividade.Domain.Interfaces.Repositories
{
    public interface IGeralRepo
    {
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        void DeleteMany<T>(IList<T> entity) where T : class;

        Task<bool> SaveChangesAsync();
    }
}