// -----------------------------------------------------------------------
// <copyright file="EmergencyContact.cs" company="">
// TODO: Update copyright text.
// </copyright>
// -----------------------------------------------------------------------

namespace Adv.Emp.Model.Models
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;

    /// <summary>
    /// TODO: Update summary.
    /// </summary>s
    public class EmergencyContact
    {
        public Int64 EmployeeNumber { get; set; }
        public String EmergencyName1 { get; set; }
        public String EmergencyRelation1 { get; set; }
        public String EmergencyMobile1 { get; set; }
        public String EmergencyPhone1 { get; set; }
        public String EmergencyAddress1 { get; set; }

        public String EmergencyName2 { get; set; }
        public String EmergencyRelation2 { get; set; }
        public String EmergencyMobile2 { get; set; }
        public String EmergencyPhone2 { get; set; }
        public String EmergencyAddress2 { get; set; }
    }
}
