using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NoteKeeper.Models
{
    public class Profile
    {
        public Details Details { get; set; }
        public Address Address { get; set; }
        public List<Note> Notes { get; set; }
    }
}
