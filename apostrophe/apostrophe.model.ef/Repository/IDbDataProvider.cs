
using apostrophe.model.Utils.Repository;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;

namespace apostrophe.model.ef
{
    public interface IDbDataProvider : IUnitOfWork
    {
        IQueryable<T> GetDbSetAsQueryable<T>() where T : class;
        DbSet<T> GetDbSet<T>() where T : class;
        DbEntityEntry<T> ContextEntry<T>(T entity) where T : class;
    }
}
