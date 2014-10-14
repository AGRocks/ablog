using System;
using System.Linq;
using System.Linq.Expressions;

namespace apostrophe.model.Utils.Repository
{
    public interface IRepository<T> : IUnitOfWork
    {
        void Update(T entity);
        void Insert(T entity);
        void Delete(T entity);
        IQueryable<T> SearchFor(Expression<Func<T, bool>> predicate);
        IQueryable<T> GetAll();
        T GetById(long id);
        T FirstOrDefault(Expression<Func<T, bool>> predicate);
    }
}
