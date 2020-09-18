using System;
using System.Collections.Generic;
using System.Text;

namespace Restauran.Data.Models
{
    public class Facturacion
    {
        public int Id { get; set; }
        public int OrderNo { get; set; }
        public string PMethod { get; set; }
        public decimal GTotal { get; set; }
        public int CustomerId { get; set; }
    }
}
