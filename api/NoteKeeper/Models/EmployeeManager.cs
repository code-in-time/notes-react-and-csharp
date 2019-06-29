using NoteKeeper.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NoteKeeper.Models
{
    public class EmployeeManager : IDataRepository<Employee>
    {
        readonly AppContext __appContext;

        public EmployeeManager(AppContext context)
        {
            __appContext = context;
        }

        public IEnumerable<Employee> GetAll()
        {
            return __appContext.Employees.ToList();
        }

        public Employee Get(long id)
        {
            return __appContext.Employees
                  .FirstOrDefault(e => e.EmployeeId == id);
        }

        public void Add(Employee entity)
        {
            __appContext.Employees.Add(entity);
            __appContext.SaveChanges();
        }

        public void Update(Employee employee, Employee entity)
        {
            employee.FirstName = entity.FirstName;
            employee.LastName = entity.LastName;
            employee.Email = entity.Email;
            employee.DateOfBirth = entity.DateOfBirth;
            employee.PhoneNumber = entity.PhoneNumber;

            __appContext.SaveChanges();
        }

        public void Delete(Employee employee)
        {
            __appContext.Employees.Remove(employee);
            __appContext.SaveChanges();
        }
    }
}
