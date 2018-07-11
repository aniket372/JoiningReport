
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

    public class DocumentDetailsRepository : BaseRepository
    {

        ///Summary: use of this method

        public int AddDocumentDetails(List<DocumentDetails> document)
        {
            try
            {
                string query = string.Empty;
                using (IDbConnection connection = OpenConnection())
                {
                    var param = new DynamicParameters();
                    if (document != null)
                    {

                        query = StoredProcedure.AddDocumentDetails;

                    }

                    return connection.Execute(query, document, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception ex)
            {
                return 0;
            }


        }
    }
}
