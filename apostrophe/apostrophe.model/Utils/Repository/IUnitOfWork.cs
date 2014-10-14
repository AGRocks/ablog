using System.Threading.Tasks;

namespace apostrophe.model.Utils.Repository
{
    public interface IUnitOfWork
    {
        void Save();
        Task SaveAsync();
    }
}
