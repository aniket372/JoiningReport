

namespace Adv.Emp.DAL
{
    using System.Data;

    using System.Data.SqlClient;
    using System.Data.Odbc;
    using System.Dynamic;
    using System.Text;

    using System.Configuration;
    using System.Web.Configuration;

    public abstract class BaseRepository
    {
       
        #region Public Readonly Properties
        public static int Database { get; private set; }
        public static string ConnectionString { get; private set; }
        #endregion

        
        #region Public Methods
        
        public static IDbConnection OpenConnection()
        {
            Database = 1;
            ConnectionString = WebConfigurationManager.ConnectionStrings["AdvConnection"].ConnectionString;
                //ConnectionStrings["DVConnection"].ConnectionString;

            IDbConnection conn = CreateConnection();

            conn.Open();
            return conn;

        }

        public static IDbConnection CreateConnection()
        {
            return CreateConnection(ConnectionString, Database);
        }


        public static IDbConnection CreateConnection(string connectionString, int database)
        {
            IDbConnection connection;
            switch (database)
            {
                case 1: //DatabaseType.MSSql:
                    connection = new SqlConnection(connectionString);
                    break;

                case 2: //DatabaseType.Oracle:
                    connection = new OdbcConnection(connectionString);
                    break;
                default:
                    connection = new SqlConnection(connectionString);
                    break;
            }
            return connection;
        }
        
        

        #endregion
    
    }


}