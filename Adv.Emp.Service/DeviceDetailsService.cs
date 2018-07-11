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
   public  class DeviceDetailsService
    {
        DeviceDetailsRepository repository = new DeviceDetailsRepository();

        public int SaveDeviceDetails(List<DeviceDetails> device)
        {
            var resultVal = repository.AddDeviceDetails(device);
            return 0;
        }
    }
}
