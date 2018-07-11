using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Adv.Emp.DAL.Repositories;
using Adv.Emp.Model.Models;
namespace Adv.Emp.Service
{
   public  class LoginService
    {
        LoginRepository repository = new LoginRepository();

        public Int64 GetLogin(LoginModel login)
        {
            var resultVal = repository.ValidateLogin(login);
            return resultVal;
        }
    }
}
