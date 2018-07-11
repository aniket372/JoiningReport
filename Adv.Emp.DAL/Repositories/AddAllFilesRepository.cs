
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

   

   public  class AddAllFilesRepository : BaseRepository
    {
        public int AddFiles(EmployeeFilesModel model1)
        {
            try
            {
                string query = string.Empty;
                using (IDbConnection connection = OpenConnection())
                {
                    var param = new DynamicParameters();
                    if (model1 != null)
                    {

                        query = StoredProcedure.UploadFiles;

                    }

                    return connection.Execute(query, model1, commandType: CommandType.StoredProcedure);
                }
            }

            catch (Exception ex)
            {
                return 0;
            }

        }
       

    }
}
