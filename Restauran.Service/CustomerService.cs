using Microsoft.EntityFrameworkCore;
using Restauran.Data;
using Restauran.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restauran.Service
{
    public class CustomerService : ICustomer
    {
        private readonly ApplicationDbContext _context;
        public CustomerService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task Add(Facturacion NewFacturacion)
        {
            _context.Add(NewFacturacion);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
             var customer = _context.Customers.Find(id);
            _context.Remove(customer);
            await _context.SaveChangesAsync();
        }

        public async Task Edit(Customer NewCustomer)
        {
            _context.Update(NewCustomer);
            await _context.SaveChangesAsync();
        }

        public IEnumerable<Customer> GetAll()
        {
            return _context.Customers;
        }

        public IEnumerable<Customer> GetAllCustomerAndFacturacion()
        {
            return _context.Customers.Include(x => x.Facturacions);
        }

        public Customer GetById(int id)
        {
            return  _context.Customers.Find(id);
        }
    }
}
