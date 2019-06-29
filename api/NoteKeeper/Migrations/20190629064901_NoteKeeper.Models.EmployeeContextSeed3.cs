using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NoteKeeper.Migrations
{
    public partial class NoteKeeperModelsEmployeeContextSeed3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1L,
                columns: new[] { "DateOfBirth", "Email", "FirstName", "Gender", "LastName", "PhoneNumber" },
                values: new object[] { new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, "FEMALE", null, null });

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 2L,
                columns: new[] { "DateOfBirth", "Email", "FirstName", "Gender", "LastName", "PhoneNumber" },
                values: new object[] { new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, "BOTH", null, null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1L,
                columns: new[] { "DateOfBirth", "Email", "FirstName", "Gender", "LastName", "PhoneNumber" },
                values: new object[] { new DateTime(1979, 4, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), "uncle.bob@gmail.com", "Uncle", "Male", "Bob", "999-888-7777" });

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 2L,
                columns: new[] { "DateOfBirth", "Email", "FirstName", "Gender", "LastName", "PhoneNumber" },
                values: new object[] { new DateTime(1981, 7, 13, 0, 0, 0, 0, DateTimeKind.Unspecified), "jan.kirsten@gmail.com", "Jan", "Male", "Kirsten", "111-222-3333" });
        }
    }
}
