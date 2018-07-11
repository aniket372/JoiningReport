
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Adv.Emp.DAL;
using Adv.Emp.Model;
using Adv.Emp.Model.Models;

namespace Adv.Emp.Service
{
   public class EmergencyContactsService
    {

        EmergencyContactsRepository emergencyrepository = new EmergencyContactsRepository();

        public int SaveEmergencyContacts(EmergencyContact emercency)
        {
            var resultVal = emergencyrepository.AddEmergencyContacts(emercency);
            return 0;
        }
        public IEnumerable<EmergencyContact> GetAllEmergencyContacts()
        {




            return emergencyrepository.GetEmergencyContacts();
        }
        public String UpdateEmergencyContactsDetails(EmergencyContact Updateemergency)
        {
          String msg=  emergencyrepository.UpdateEmergencyContacts(Updateemergency);

           return msg;
        }
    }
}
