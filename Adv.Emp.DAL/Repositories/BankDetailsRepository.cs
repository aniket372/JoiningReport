

namespace Adv.Emp.DAL
{
    using System;
    using System.Collections.Generic;


    using System.Text;
    using System.Data;
    using Adv.Emp.Model;
    using Dapper;
    using System.Web.Configuration;
    using Model.Models;

    public class BankDetailsRepository : BaseRepository
    {
        public int AddBankDetails(BankDetails bank)
        {
            try
            {
                string query = string.Empty;
                using (IDbConnection connection = OpenConnection())
                {
                    var param = new DynamicParameters();
                    if (bank != null)
                    {

                        query = StoredProcedure.AddBankDetails;

                    }


                    //   param.Add("@Retval", dbType: DbType.Int32, direction: ParameterDirection.ReturnValue);
                    //   param.Add("@Name", dbType: DbType.String);
                    //   param.Add("@employeeid", dbType: DbType.String, re);



                    return connection.Execute(query, bank, commandType: CommandType.StoredProcedure);

                }
            }
            catch (Exception ex)
            {
                return 0;
            }


        }
    }
}
