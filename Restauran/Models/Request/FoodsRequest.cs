﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restauran.Models
{
    public class FoodsRequest
    {
        public int Id { get; set; }
        public string Food { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}
