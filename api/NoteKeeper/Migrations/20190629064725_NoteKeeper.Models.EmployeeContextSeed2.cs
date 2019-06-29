using Microsoft.EntityFrameworkCore.Migrations;

namespace NoteKeeper.Migrations
{
    public partial class NoteKeeperModelsEmployeeContextSeed2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1L,
                column: "Gender",
                value: "Male");

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 2L,
                column: "Gender",
                value: "Male");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1L,
                column: "Gender",
                value: null);

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 2L,
                column: "Gender",
                value: null);
        }
    }
}
