using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NoteKeeper.Models.Profile
{
    public class Note
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public string Date { get; set; }
        public string Subject { get; set; }
        public string Text { get; set; }
        public Boolean Private { get; set; }
        public Boolean Archived { get; set; }
    }
}
