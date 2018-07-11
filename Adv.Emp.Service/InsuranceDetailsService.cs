using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Adv.Emp.DAL;
using Adv.Emp.Model;
using Adv.Emp.DAL.Repositories;
using Adv.Emp.Model.Models;

namespace Adv.Emp.Service
{
    public class InsuranceDetailsService
    {
        InsuranceDetailsRepository insurancerepository = new InsuranceDetailsRepository();

        public int SaveInsuranceDetails(List<InsuranceDetails> insurance)
        {
            var resultVal = insurancerepository.AddInsuranceDetails(insurance);
           

            return 0;
        }
    }
}
