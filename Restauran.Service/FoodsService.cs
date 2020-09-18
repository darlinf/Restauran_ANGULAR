using Microsoft.EntityFrameworkCore;
using Restauran.Data;
using Restauran.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Restauran.Service
{
    public class FoodsService : IFoods
    {
        private readonly ApplicationDbContext _context;
        public FoodsService( ApplicationDbContext context )
        {
            _context = context;
        }

        public async Task AddFoods(Foods foods)
        {
            _context.Add(foods);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteFood(int id)
        {
            Foods foods = _context.Foods.Find(id);
            _context.Remove(foods);
            await _context.SaveChangesAsync();
        }

        public async Task EditFood(int id, Foods newFood)
        {
            /*
            Foods foods1 = _context.Foods.Find(id);
            Foods foods = _context.Foods.Find(id);
            foods = newFood;*/
            _context.Entry(newFood).State = EntityState.Modified;
            await _context.SaveChangesAsync();


        }

        public Foods GetFoodById(int id)
        {
            return _context.Foods.Find(id);
        }

        public IEnumerable<Foods> GetFoodsAll()
        {
            return _context.Foods;
        }
    }
}
