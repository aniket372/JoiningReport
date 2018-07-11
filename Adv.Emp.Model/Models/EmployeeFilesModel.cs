using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Adv.Emp.Model.Models
{
   
       public class EmployeeFilesModel
        {
        public Int64 EmployeeNumber { get; set; }

        [Display(Name = "Uploaded File")]
        public String FileDescription { get; set; }
        public String FileName { get; set; }
        public byte[] FileContent { get; set; }

    }

}
