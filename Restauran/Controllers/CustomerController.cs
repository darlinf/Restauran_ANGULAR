using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Restauran.Data;
using Restauran.Data.Models;
using Restauran.Service;

namespace Restauran.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomer _customerService;
        public CustomerController(ICustomer customerService)
        {
            _customerService = customerService;
        }

        [HttpGet]
        public IActionResult GetCustomer()
        {
            var customer = _customerService.GetAll();
            return Ok(customer);
        }

        [HttpGet("and")]
        public IActionResult GetCustomerAndFacturacion()
        {
            var customer = _customerService.GetAllCustomerAndFacturacion();
            return Ok(customer);
        }

        [HttpGet("{id}")]
        public IActionResult GetByIdCustomer(int id)
        {
            var customer = _customerService.GetById(id);
            return Ok(customer);
        }

        [HttpPost]
        public IActionResult AddCustomer(Facturacion NewFacturacion)
        {
            _customerService.Add(NewFacturacion);
            return Ok();
        }

        [HttpPut]
        public IActionResult EditCustomer(Customer Customer)
        {
            _customerService.Edit(Customer);
            return Ok();
        }

    }
}