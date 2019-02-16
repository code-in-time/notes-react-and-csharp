using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NoteKeeper.Models;


namespace NoteKeeper.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        // GET api/Profile/5
        [HttpGet("{id}")]
        public ActionResult<Profile> Get(int id)
        {
            Address Address = new Address();
            Address.No = 1;
            Address.Road = "my road";
            Address.Street = "The street";

            Details Details = new Details();
            Details.Age = 7;
            Details.CellNumber = 19900000;
            Details.Email = "ZZZZZZZ@zzzzzz.com";

            Note Note = new Note();
            Note.Date = DateTime.Now;
            Note.Subject = "The subject";
            Note.Text = "The note text";
            Note.Private = false;

            List<Note> NotesList = new List<Note>();
            NotesList.Add(Note);

            Profile Profile = new Profile();
            Profile.Address = Address;
            Profile.Details = Details;
            Profile.Notes = NotesList;


            //return new string[] { "user", id.ToString() };
            return Profile;
           
        }
    }
}