
namespace Adv.Emp.DAL.Repositories
{
    using System;
    using System.Collections.Generic;


    using System.Text;
    using System.Data;
    using Adv.Emp.Model;
    using Dapper;
    using System.Web.Configuration;
    using Model.Models;

    public class DeviceDetailsRepository : BaseRepository
    {
        ///Summary: use of this method

        public int AddDeviceDetails(List<DeviceDetails> device)
        {
            try
            {
                string query = string.Empty;
                using (IDbConnection connection = OpenConnection())
                {
                    var param = new DynamicParameters();
                    if (device != null)
                    {

                        query = StoredProcedure.AddDeviceDetails;

                    }

                    return connection.Execute(query, device, commandType: CommandType.StoredProcedure);
                }
            }

            catch (Exception ex)
            {
                return 0;
            }

        }
    }
}
