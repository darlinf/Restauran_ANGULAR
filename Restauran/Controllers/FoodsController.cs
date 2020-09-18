using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Restauran.Data;
using Restauran.Models;
using Restauran.Models.Response;

namespace Restauran.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodsController : ControllerBase
    {
        private readonly IFoods _foodService;
        public FoodsController(IFoods foodService)
        {
            _foodService = foodService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var ORespuesta = new Respuesta();
            try
            {
                ORespuesta.Data = _foodService.GetFoodsAll()
                                  .Select(foods => new FoodsRequest{
                                    Id = foods.Id,
                                    Food = foods.Food,
                                    Price = foods.Price,
                                    Quantity = foods.Quantity
                                  });

                ORespuesta.Exito = 1;
            }
            catch (Exception ex)
            {
                ORespuesta.Mensaje = ex.Message;
            }

            return Ok(ORespuesta.Data);
        }

        [HttpGet("{id}")]
        public IActionResult getById(int id)
        {

            var ORespuesta = new Respuesta();
            try
            {
                ORespuesta.Data = _foodService.GetFoodById(id);

                ORespuesta.Exito = 1;
            }
            catch (Exception ex)
            {
                ORespuesta.Mensaje = ex.Message;
            }

            return Ok(ORespuesta.Data);
        }

        [HttpPost]
        public IActionResult Post(Foods foods)
        {
            var ORespuesta = new Respuesta();
            try
            {
                _foodService.AddFoods(foods);
                ORespuesta.Exito = 1;
            }
            catch (Exception ex)
            {
                ORespuesta.Mensaje = ex.Message;
            }

            return Ok(ORespuesta);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete (int id)
        {
            var ORespuesta = new Respuesta();

            try
            {
                _foodService.DeleteFood(id);
                ORespuesta.Exito = 1;
            }
            catch (Exception ex)
            {
                ORespuesta.Mensaje = ex.Message;
            }
            return Ok(ORespuesta);
        }

        [HttpPut("{id}")]
        public IActionResult Edit(int id, Foods foods)
        {
            var ORespuesta = new Respuesta();
            try
            {
                _foodService.EditFood(id, foods);
                ORespuesta.Exito = 1;
            }
            catch (Exception ex)
            {
                ORespuesta.Mensaje = ex.Message;
            }

            return Ok(ORespuesta);
        }
    }
}