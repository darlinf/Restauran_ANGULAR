using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Restauran.Models;
using Restauran.Data.Models;

namespace Restauran.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext (DbContextOptions options) : base(options) 
        {

        }
        public DbSet<Foods> Foods { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Facturacion> Facturacions { get; set; }
    }
}
