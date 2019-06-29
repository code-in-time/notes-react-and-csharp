using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NoteKeeper.Models;
using NoteKeeper.Models.Profile;

namespace NoteKeeper
{
    // Add-Migration NoteKeeper.Models.EmployeeContext
    public class AppContext : DbContext
    {
        public AppContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Address> Address { get; set; }
        public DbSet<Details> Details { get; set; }
        public DbSet<Note> Note { get; set; }
        public DbSet<Profile> Profiles { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Employee>().HasData(new Employee
        //    {
        //        EmployeeId = 1,
        //        FirstName = "Uncle",
        //        LastName = "Bob",
        //        Email = "uncle.bob@gmail.com",
        //        DateOfBirth = new DateTime(1979, 04, 25),
        //        PhoneNumber = "999-888-7777"

        //    }, new Employee
        //    {
        //        EmployeeId = 2,
        //        FirstName = "Jan",
        //        LastName = "Kirsten",
        //        Email = "jan.kirsten@gmail.com",
        //        DateOfBirth = new DateTime(1981, 07, 13),
        //        PhoneNumber = "111-222-3333"
        //    });
        //}
    }
}
