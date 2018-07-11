

namespace Adv.Emp.DAL
{
    using System;
    using System.Collections.Generic;


    using System.Text;
    using System.Data;
    using Adv.Emp.Model;
    using Dapper;
    using System.Web.Configuration;

    public class EmployeeRepository : BaseRepository
    {

        ///Summary: use of this method

        public Int64 AddPersonalDetail(Employee employee)
        {
            try
            {
                string query = string.Empty;
                using (IDbConnection connection = OpenConnection())
                {
                    var param = new DynamicParameters();
                    if (employee != null)
                    {

                        query = StoredProcedure.AddEmployee;

                    }


                    param.Add("@ReturnId", dbType: DbType.Int64, direction: ParameterDirection.Output);
                    param.Add("@JoiningDate", employee.JoiningDate);
                    param.Add("@FirstName", employee.FirstName);
                    param.Add("@LastName", employee.LastName);
                    param.Add("@DOB", employee.DOB);
                    param.Add("@Gender", employee.Gender);
                    param.Add("@MaritalStatus", employee.MaritalStatus);
                    param.Add("@Email", employee.Email);
                    param.Add("@BloodGroup", employee.BloodGroup);
                    param.Add("@Location", employee.Location);
                    param.Add("@Designation", employee.Designation);
                    param.Add("@Citizenship", employee.Citizenship);
                    param.Add("@WorkPermit", employee.WorkPermit);
                    param.Add("@PermanentCountry", employee.PermanentCountry);
                    param.Add("@PermanentAddress", employee.PermanentAddress);
                    param.Add("@PermanentCity", employee.PermanentCity);
                    param.Add("@PermanentState", employee.PermanentState);
                    param.Add("@PermanentPincode", employee.PermanentPincode);
                    param.Add("@PermanentMobile", employee.PermanentMobile);
                    param.Add("@PermanentPhone", employee.PermanentPhone);
                    param.Add("@PresentCountry", employee.PresentCountry);
                    param.Add("@PresentAddress", employee.PresentAddress);
                    param.Add("@PresentState", employee.PresentState);
                    param.Add("@PresentCity", employee.PresentCity);
                    param.Add("@PresentPincode", employee.PresentPincode);
                    param.Add("@PresentMobile", employee.PresentMobile);
                    param.Add("@PresentPhone", employee.PresentPhone);

                    connection.Execute(query, param, commandType: CommandType.StoredProcedure);
                    Int64 retvalue = param.Get<Int64>("@ReturnId");


                    return retvalue;
                }
            }
            catch (Exception ex)
            {
                return 0;
            }


        }

        // This will be used to get all the Metadata Packages to list out packages in Report Repository
        //public IEnumerable<Employee> GetEmployee(int? loggedUserId, string packageName, int packageId)
        //{
        //    string query = string.Empty;
        //    Employee analyticPackage = new Employee();

        //    Int32 databaseType = Convert.ToInt32(WebConfigurationManager.AppSettings["DatabaseType"]);

        //    using (IDbConnection connection = OpenConnection())
        //    {
        //        var param = new DynamicParameters();

        //        query = StoredProcedure.GetEmployees;

        //        param.Add("@userId", loggedUserId);
        //        return connection.Query<Employee>(query, param, commandType: CommandType.StoredProcedure);
        //    }

        public IEnumerable<GetEmployeeModel> GetEmployee()
        {
            try
            {
                string query = string.Empty;


                using (IDbConnection connection = OpenConnection())
                {
                    var param = new DynamicParameters();

                    query = StoredProcedure.GetEmployees;

                    //param.Add("@Id",Id);
                    //param.Add("@FirstName", FirstName);
                    //param.Add("@LastName", LastName);
                    //param.Add("@Email", Email);
                    //param.Add("@Designation", Designation);
                    return connection.Query<GetEmployeeModel>(query, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                return null;
            }

        }
        
        public String  UpdateEmployeeDetail(GetEmployeeModel Updateemployee)
        {
            try
            {
                string query = string.Empty;
                using (IDbConnection connection = OpenConnection())
                {
                    var param = new DynamicParameters();
                    if (Updateemployee != null)
                    {

                        query = StoredProcedure.UpdateEmployee;

                    }
                    connection.Execute(query, Updateemployee, commandType: CommandType.StoredProcedure);
                    return "Personal Details of 'Employee Number:"+Updateemployee.EmployeeNumber + "'"+" have been Updated";

                }
            }
            catch (Exception ex)
            {
                return "Error Occured";
            }

        }

    }

    }
