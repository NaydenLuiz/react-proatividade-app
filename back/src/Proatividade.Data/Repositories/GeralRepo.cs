using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Proatividade.Data.Context;
using Proatividade.Domain.Interfaces.Repositories;

namespace Proatividade.Data.Repositories;

public class GeralRepo : IGeralRepo
{
    public readonly DataContext _context;
    public GeralRepo(DataContext dataContext)
    {
        _context = dataContext;
    }
  
    public void Add<T>(T entity) where T : class
    {
        _context.Add(entity);
    }

    public void Delete<T>(T entity) where T : class
    {
        _context.Remove(entity);
    }

    public void DeleteMany<T>(IList<T> entity) where T : class
    {
        _context.RemoveRange(entity);
    }

    public async Task<bool> SaveChangesAsync() => await _context.SaveChangesAsync() > 0;

    public void Update<T>(T entity) where T : class
    {
        _context.Update(entity);
    }
}
