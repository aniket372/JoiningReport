

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

    public class InsuranceDetailsRepository : BaseRepository
    {
        ///Summary: use of this method

        public int AddInsuranceDetails(IList<InsuranceDetails> insurance)
        {
            try
            {
                string query = string.Empty;
                using (IDbConnection connection = OpenConnection())
                {
                    var param = new DynamicParameters();
                    if (insurance != null)
                    {

                        query = StoredProcedure.AddInsuranceDetails;

                    }
                    
                    return connection.Execute(query, insurance, commandType: CommandType.StoredProcedure);


                }
            }
            catch (Exception ex)
            {
                return 0;
            }

        }
    }
}
