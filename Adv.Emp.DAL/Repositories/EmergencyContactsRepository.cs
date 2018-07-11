

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

    public class EmergencyContactsRepository:BaseRepository
    {
        public int AddEmergencyContacts(EmergencyContact emergency)
        {
            try
            {
                string query = string.Empty;
                using (IDbConnection connection = OpenConnection())
                {
                    var param = new DynamicParameters();
                    if (emergency != null)
                    {

                        query = StoredProcedure.AddEmergencyContacts;

                    }


                    //   param.Add("@Retval", dbType: DbType.Int32, direction: ParameterDirection.ReturnValue);
                    //   param.Add("@Name", dbType: DbType.String);
                    //   param.Add("@employeeid", dbType: DbType.String, re);
                 
                    
                    
                    return connection.Execute(query, emergency, commandType: CommandType.StoredProcedure);

                }
            }
            catch (Exception ex)
            {
                return 0;
            }


        }
        public IEnumerable<EmergencyContact> GetEmergencyContacts()
        {
            try
            {
                string query = string.Empty;


                using (IDbConnection connection = OpenConnection())
                {
                    var param = new DynamicParameters();

                    query = StoredProcedure.GetEmergencyContacts;

                    //param.Add("@Id",Id);
                    //param.Add("@FirstName", FirstName);
                    //param.Add("@LastName", LastName);
                    //param.Add("@Email", Email);
                    //param.Add("@Designation", Designation);
                    return connection.Query<EmergencyContact>(query, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                return null;
            }

        }

        public String UpdateEmergencyContacts(EmergencyContact Updateemergency)
        {
            try
            {
                string query = string.Empty;
                using (IDbConnection connection = OpenConnection())
                {
                    var param = new DynamicParameters();
                    if (Updateemergency != null)
                    {

                        query = StoredProcedure.UpdateEmergencyContacts;

                    }
                   
                     connection.Execute(query, Updateemergency, commandType: CommandType.StoredProcedure);
                    return "Emergency Contact details of 'Employee Number:" +Updateemergency.EmployeeNumber + "'" + " have been Updated";
                }
            }
            catch (Exception ex)
            {
                return "Error Occured";
            }

        }


    }
}
