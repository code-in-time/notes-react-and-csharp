using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NoteKeeper.Models
{
    public class Note
    {
        public string Date { get; set; }
        public string Subject { get; set; }
        public string Text { get; set; }
        public Boolean Private { get; set; }
        public Boolean Archived { get; set; }
    }
}
