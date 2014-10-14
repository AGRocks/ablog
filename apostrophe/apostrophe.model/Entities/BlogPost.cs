using apostrophe.model.Utils;
using System;

namespace apostrophe.model.Entities
{
    public class BlogPost : IClientEntity
    {
        public long Id { get; set; }

        public string Title { get; set; }
        public string Text { get; set; }
        public DateTime? DatePosted { get; set; }
    }
}
