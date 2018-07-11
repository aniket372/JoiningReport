using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EmployeeJoiningReport.Startup))]
namespace EmployeeJoiningReport
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
