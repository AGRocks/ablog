using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using apostrophe.model.Entities;
using apostrophe.model.Utils.Repository;

namespace apostrophe.Controllers
{
    public class BlogPostsApiController : ApiController
    {
        private IRepository<BlogPost> repo;

        public BlogPostsApiController(IRepository<BlogPost> repo)
        {
            this.repo = repo;
        }

        // GET: api/BlogPostsApi
        public IQueryable<BlogPost> GetBlogPosts()
        {
            return this.repo.GetAll();
        }

        // GET: api/BlogPostsApi/5
        [ResponseType(typeof(BlogPost))]
        public async Task<IHttpActionResult> GetBlogPost(long id)
        {
            BlogPost blogPost = this.repo.GetById(id);
            if (blogPost == null)
            {
                return NotFound();
            }

            return Ok(blogPost);
        }

        // PUT: api/BlogPostsApi/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutBlogPost(long id, BlogPost blogPost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != blogPost.Id)
            {
                return BadRequest();
            }

            this.repo.Update(blogPost);

            try
            {
                await this.repo.SaveAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogPostExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/BlogPostsApi
        [ResponseType(typeof(BlogPost))]
        public async Task<IHttpActionResult> PostBlogPost(BlogPost blogPost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            this.repo.Insert(blogPost);
            await this.repo.SaveAsync();

            return CreatedAtRoute("DefaultApi", new { id = blogPost.Id }, blogPost);
        }

        // DELETE: api/BlogPostsApi/5
        [ResponseType(typeof(BlogPost))]
        public async Task<IHttpActionResult> DeleteBlogPost(long id)
        {
            BlogPost blogPost = this.repo.GetById(id);
            if (blogPost == null)
            {
                return NotFound();
            }

            this.repo.Delete(blogPost);
            await this.repo.SaveAsync();

            return Ok(blogPost);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                //this.repo.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BlogPostExists(long id)
        {
            return this.repo.FirstOrDefault(e => e.Id == id) != null;
        }
    }
}