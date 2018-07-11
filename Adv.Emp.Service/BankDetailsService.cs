using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Adv.Emp.DAL;
using Adv.Emp.Model;
using Adv.Emp.Model.Models;

namespace Adv.Emp.Service
{
    public class BankDetailsService
    {

        BankDetailsRepository bankrepository = new BankDetailsRepository();

        public int SaveBankDetails(BankDetails bank)
        {
            var resultVal = bankrepository.AddBankDetails(bank);
            return 0;
        }
    }
}