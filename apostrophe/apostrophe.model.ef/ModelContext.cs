using apostrophe.model.Entities;
using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Threading.Tasks;

namespace apostrophe.model.ef
{
    public class ModelContext : DbContext, IDbDataProvider
    {
        public DbSet<BlogPost> BlogPosts { get; set; }

        public IQueryable<T> GetDbSetAsQueryable<T>() where T : class
        {
            return this.Set<T>().AsQueryable();
        }

        public DbSet<T> GetDbSet<T>() where T : class
        {
            return this.Set<T>();
        }

        public void Save()
        {
            base.SaveChanges();
        }

        public async Task SaveAsync()
        {
            await base.SaveChangesAsync();
        }

        public DbEntityEntry<T> ContextEntry<T>(T entity) where T : class
        {
            return this.Entry(entity);
        }
    }
}
