﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Adv.Emp.DAL.Repositories;
using Adv.Emp.Model.Models;


namespace Adv.Emp.Service
{
    public class EmployeeImageService
    {
        EmployeeImageRepository imgrepository = new EmployeeImageRepository();

        public int SaveEmployeeImage(EmployeeImageModel image)
        {
            var resultVal = imgrepository.AddEmployeeImage(image);


            return 0;
        }



        public List<EmployeeImageModel> GetAllFiles()
        {


          

            return imgrepository.GetFileList();
        }
    }
}
