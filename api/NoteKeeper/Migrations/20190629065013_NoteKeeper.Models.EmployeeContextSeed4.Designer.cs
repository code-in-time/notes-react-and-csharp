﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using NoteKeeper.Models;

namespace NoteKeeper.Migrations
{
    [DbContext(typeof(EmployeeContext))]
    [Migration("20190629065013_NoteKeeper.Models.EmployeeContextSeed4")]
    partial class NoteKeeperModelsEmployeeContextSeed4
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("NoteKeeper.Models.Employee", b =>
                {
                    b.Property<long>("EmployeeId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateOfBirth");

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<string>("Gender");

                    b.Property<string>("LastName");

                    b.Property<string>("PhoneNumber");

                    b.HasKey("EmployeeId");

                    b.ToTable("Employees");

                    b.HasData(
                        new { EmployeeId = 3L, DateOfBirth = new DateTime(1979, 4, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), Email = "uncle.bob@gmail.com", FirstName = "Uncle", Gender = "Male", LastName = "Bob", PhoneNumber = "999-888-7777" },
                        new { EmployeeId = 4L, DateOfBirth = new DateTime(1981, 7, 13, 0, 0, 0, 0, DateTimeKind.Unspecified), Email = "jan.kirsten@gmail.com", FirstName = "Jan", Gender = "Male", LastName = "Kirsten", PhoneNumber = "111-222-3333" }
                    );
                });
#pragma warning restore 612, 618
        }
    }
}
