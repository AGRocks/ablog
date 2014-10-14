using apostrophe.model.Utils;
using apostrophe.model.Utils.Repository;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace apostrophe.model.ef
{
    public class EntityFrameworkRepository<T> : IRepository<T> where T : class, IClientEntity
    {
        private DbSet<T> context;
        private IUnitOfWork unitOfWork;
        private IDbDataProvider dataProvider;

        public EntityFrameworkRepository(IDbDataProvider dataProvider)
        {
            this.context = dataProvider.GetDbSet<T>();
            this.dataProvider = dataProvider;
            unitOfWork = dataProvider as IUnitOfWork;
        }

        public void Insert(T entity)
        {
            context.Add(entity);
        }

        public void Delete(T entity)
        {
            context.Remove(entity);
        }

        public IQueryable<T> SearchFor(Expression<Func<T, bool>> predicate)
        {
            return context.Where(predicate);
        }

        public IQueryable<T> GetAll()
        {
            return context.AsQueryable();
        }

        public T GetById(long id)
        {
            return context.FirstOrDefault(x => x.Id == id);
        }

        public T FirstOrDefault(Expression<Func<T, bool>> predicate)
        {
            return context.FirstOrDefault(predicate);
        }

        public void Update(T entity)
        {
            var entry = this.dataProvider.ContextEntry(entity);

            if (entry.State == EntityState.Detached)
            {
                var currentEntry = this.context.Find(entity.Id);
                if (currentEntry != null)
                {
                    var attachedEntry = this.dataProvider.ContextEntry(currentEntry);
                    attachedEntry.CurrentValues.SetValues(entity);
                }
                else
                {
                    this.context.Attach(entity);
                    entry.State = EntityState.Modified;
                }
            }
        }

        #region IUnitOfWork Members

        public void Save()
        {
            if (unitOfWork != null)
                unitOfWork.Save();
        }

        public Task SaveAsync()
        {
            if (unitOfWork != null)
                return unitOfWork.SaveAsync();

            return Task.Delay(0);
        }

        #endregion
    }
}
