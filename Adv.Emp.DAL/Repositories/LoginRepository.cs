namespace Adv.Emp.DAL.Repositories
{


    using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using Adv.Emp.Model;
using Dapper;
using System.Web.Configuration;
using Model.Models;

   public  class LoginRepository : BaseRepository
    {
        ///Summary: use of this method

        public Int64 ValidateLogin(LoginModel login)
        {
            try
            {
                string query = string.Empty;
                using (IDbConnection connection = OpenConnection())
                {
                    var param = new DynamicParameters();
                    if (login != null)
                    {

                        query = StoredProcedure.GetValidLogin;

                    }
                    param.Add("@Id", dbType: DbType.Int64, direction: ParameterDirection.Output);
                    param.Add("@UserName", login.UserName);
                    param.Add("@Password", login.Password);
                    connection.Execute(query, param, commandType: CommandType.StoredProcedure);
                    Int64 retvalue = param.Get<Int64>("@Id");


                    return retvalue;
                }
            }

            catch (Exception ex)
            {
                return 0;
            }

        }
    }
}
