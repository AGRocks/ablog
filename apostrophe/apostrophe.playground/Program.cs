using apostrophe.model.ef;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace apostrophe.playground
{
    class Program
    {
        static void Main(string[] args)
        {
            var context = new ModelContext();
            var result = context.BlogPosts.ToList();
        }
    }
}
