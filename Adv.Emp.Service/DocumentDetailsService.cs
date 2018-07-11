using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Adv.Emp.DAL;
using Adv.Emp.Model;
using Adv.Emp.DAL.Repositories;
using Adv.Emp.Model.Models;

namespace Adv.Emp.Service
{
    public class DocumentDetailsService
    {
        DocumentDetailsRepository repository = new DocumentDetailsRepository();

        public int SaveDocumentDetails(List<DocumentDetails> document)
        {
            var resultVal = repository.AddDocumentDetails(document);
            return 0;
        }
    }
}
