using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using  Adv.Emp.DAL;
using Adv.Emp.Model;

namespace Adv.Emp.Service
{
    public class EmployeeService
    {
        EmployeeRepository repository = new EmployeeRepository();

        public Int64 AddEmployee(Employee employee)
        {
            var resultVal = repository.AddPersonalDetail(employee);
            employee.Id = resultVal;
            
            return employee.Id;
        }

        public IEnumerable<GetEmployeeModel> GetAllEmployee ()
        {




            return repository.GetEmployee(); 
        }
        public String UpdateEmployee(GetEmployeeModel Updateemployee)
        {
            
           String msg= repository.UpdateEmployeeDetail(Updateemployee);

            return msg;
        }
       
    }
}
