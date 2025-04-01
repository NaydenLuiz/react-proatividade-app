using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Proatividade.Domain.Entities;
using Proatividade.Domain.Interfaces.Repositories;
using Proatividade.Data.Context;
namespace Proatividade.Data.Repositories;

public class AtividadeRepo : GeralRepo, IAtividadeRepo
{
    private readonly DataContext _context;

    public AtividadeRepo(DataContext dataContext) : base(dataContext)
    {
        _context = dataContext;
    }
    public async Task<Atividade> GetByIdAsync(int id)
    {
        IQueryable<Atividade> query = _context.Atividades;

        query = query.AsNoTracking()
            .OrderBy(a => a.Id)
            .Where(a => a.Id == id);
            
        return await query.FirstOrDefaultAsync();
    }

    public async Task<Atividade> GetByTituloAsync(string titulo)
    {
        IQueryable<Atividade> query = _context.Atividades;

        query = query.AsNoTracking()
            .OrderBy(a => a.Id);
            
        return await query.FirstOrDefaultAsync(s=> s.Titulo == titulo); 
    }

    public async Task<IList<Atividade>> GetAllAsync()
    {
        IQueryable<Atividade> query = _context.Atividades;

        query = query.AsNoTracking()
            .OrderBy(a => a.Id);
            
        return await query.ToListAsync();
    }
}