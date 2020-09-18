using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Restauran.Data.Models;

namespace Restauran.Data
{
    public interface ICustomer
    {
        IEnumerable<Customer> GetAll();
        IEnumerable<Customer> GetAllCustomerAndFacturacion();
        Customer GetById (int id);
        Task Add (Facturacion NewFacturacion);
        Task Edit (Customer NewCustomer);
        Task Delete (int id);
    }
}
