using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Adv.Emp.Model.Models
{
   public class DocumentDetails
    {
        public Int64 EmployeeNumber { get; set; }
        public String PANName { get; set; }
        public String PANNo { get; set; }
        public String PANFatherName { get; set; }
        public String PANDOB { get; set; }
        public String PassportStatus { get; set; }
        public String PassportNo { get; set; }
        public String BirthPlace { get; set; }
        
        public String PassportFirstName { get; set; }
        public String PassportLastName { get; set; }
       
        public String PassportIssue { get; set; }
        public String PassportExpiry { get; set; }
        public String DocumentsProvided { get; set; }

        public String OfferedDate { get; set; }
        public String FirstJobDate { get; set; }

        public String VisaType { get; set; }
        public String Country { get; set; }
        public String VisaExpiry { get; set; }
    }
}
