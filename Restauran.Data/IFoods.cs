using Restauran.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Restauran.Data
{
    public interface IFoods
    {
        IEnumerable<Foods> GetFoodsAll();
        Foods GetFoodById(int id);
        Task AddFoods(Foods foods);
        Task DeleteFood(int id);
        Task EditFood(int id, Foods newFood);
    }
}
