using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Adv.Emp.Model.Models
{
   public class DeviceDetails
    { 
        public Int64 EmployeeNumber { get; set; }
        public String DeviceType { get; set; }
        public String Make { get; set; }
        public String ModelNo { get; set; }
        public String SerialNo { get; set; }
        public String HDD { get; set; }
        public String RAM { get; set; }

        public String DeviceIssue { get; set; }
        public String DeviceReturn { get; set; }
        public String Peripherals { get; set; }
        public String AccessCardNo { get; set; }
    }
}
