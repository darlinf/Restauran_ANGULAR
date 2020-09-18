using System;
using System.Collections.Generic;
using System.Text;

namespace Restauran.Data.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Facturacion> Facturacions { get; set; }
    }
}
