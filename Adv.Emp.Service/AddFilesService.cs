using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Adv.Emp.DAL.Repositories;
using Adv.Emp.Model.Models;



    namespace Adv.Emp.Service
{
    public class AddFilesService
    {
        AddAllFilesRepository imgrepository = new AddAllFilesRepository();
      

       
        public int SaveAllFiles(EmployeeFilesModel model1)
        {
            var resultVal = imgrepository.AddFiles(model1);


            return 0;
        }

       

    }




}
