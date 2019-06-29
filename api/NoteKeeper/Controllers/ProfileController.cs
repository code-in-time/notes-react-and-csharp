using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NoteKeeper.Models.Profile;


namespace NoteKeeper.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        // GET api/Profile/5
        // http://localhost:5000/api/Profile/5
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
            Note.Date = DateTime.Now.ToLongDateString();
            Note.Subject = "The subject";
            Note.Text = "The note text";
            Note.Private = false;
            Note.Archived = true;

            List<Note> NotesList = new List<Note>();
            NotesList.Add(Note);

            Profile Profile = new Profile();
            Profile.Address = Address;
            Profile.Details = Details;
            Profile.Notes = NotesList;


            //return new string[] { "user", id.ToString() };
            return Profile;
           
        }

        // POST api/values
        [HttpPost]
        // GET api/Profile/5
        //[HttpPost("{id}")]
        //public ActionResult<Profile> Get(int id)
        //public void Post([FromBody] Profile value)
        // public ActionResult<Profile> Post([FromBody] Profile value)
        // http://localhost:5000/api/Profile
        public ActionResult<Profile> Post([FromBody] Profile value)
        {
            //why is the data null?

            var s = value;
            return value;
        }

    }

}