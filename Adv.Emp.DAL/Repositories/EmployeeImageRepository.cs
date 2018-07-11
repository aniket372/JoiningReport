namespace Adv.Emp.DAL.Repositories
{
    using System;
    using System.Collections.Generic;

    using System.Data.SqlClient;
    using System.Text;
    using System.Data;
    using Adv.Emp.Model;
    using Dapper;
    using System.Web.Configuration;
    using Model.Models;
    using System.IO;
    using System.Linq;
    using System.Web;

    public class EmployeeImageRepository : BaseRepository
    {
        private IDbConnection con;

        public int AddEmployeeImage(EmployeeImageModel image)
        {
            try
            {
                string query = string.Empty;
                using (IDbConnection connection = OpenConnection())
                {
                    var param = new DynamicParameters();
                    if (image != null)
                    {

                        query = StoredProcedure.AddEmployeeImage;

                    }

                    return connection.Execute(query, image, commandType: CommandType.StoredProcedure);


                }
            }
            catch (Exception ex)
            {
                return 0;
            }

        }
        public  List<EmployeeImageModel> GetFileList() 
        {
          
            try
            {
                string query = string.Empty;


                using (IDbConnection connection = OpenConnection())
                {
                    var param = new DynamicParameters();

                    query = StoredProcedure.GetAllUploadedFiles;

                    List<EmployeeImageModel> DetList = new List<EmployeeImageModel>();
                    DetList = SqlMapper.Query<EmployeeImageModel>(connection, "GetAllUploadedFiles", commandType: CommandType.StoredProcedure).ToList();
                    //param.Add("@Id",Id);
                    //param.Add("@FirstName", FirstName);
                    //param.Add("@LastName", LastName);
                    //param.Add("@Email", Email);
                    //param.Add("@Designation", Designation);
                    return DetList;
                }
            }
            catch (Exception ex)
            {
                return null;
            }

        

    }
    }
}
