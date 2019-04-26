using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using drinkfinder.Models;
using Microsoft.AspNetCore.Mvc;
using Npgsql;

namespace drinkfinder.Api.Controllers
{
    [Route("api/ingredients")]
    [ApiController]
    public class IngredientsController : ControllerBase{

        private readonly DrinkFinderContext db;

          
        public IngredientsController(DrinkFinderContext db)
        {
           this.db = db;
        }

     

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(db.Ingredients);
        }

        [HttpGet("{id}", Name = "GetIngredient")]
        public IActionResult GetIngredient(int id)
        {
            var ingredient = db.Ingredients.FirstOrDefault(b => b.ingredientId == id);

            if (ingredient == null)
            {
                return NotFound();
            }

            return Ok(ingredient);
        }
        [HttpPost]
        public IActionResult Post([FromBody]Ingredient ingredient)
        {
            if (ingredient == null)
            {
                return BadRequest();
            }

            db.Ingredients.Add(ingredient);
            db.SaveChanges();

            return CreatedAtRoute("GetIngredient", new { id = ingredient.ingredientId }, ingredient);
        }
        [HttpPost("{name}", Name = "AddIngredient")]
        public IActionResult AddIngredient([FromBody]Ingredient ingredientToEdit)
        {
            if (ingredientToEdit == null)
            {
                return BadRequest();
            }
            
            db.Ingredients.Add(ingredientToEdit);
            db.SaveChanges();

            return CreatedAtRoute("AddIngredient", new { id = ingredientToEdit.ingredientId }, ingredientToEdit);
        }

        [HttpPut("{id}")]
        public IActionResult Put([FromBody]Ingredient ingredient)
        {
            if (ingredient == null)
            {
                return BadRequest();
            }

           // var ingredientToEdit = db.Ingredients.FirstOrDefault(b => b.ingredientId == id);
            //if (ingredientToEdit == null)
            // {
            //     return NotFound();
            // }

            // ingredientToEdit.ingredientName = ingredient.ingredientName;
            

            db.Ingredients.Update(ingredient);
            db.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var ingredient = db.Ingredients.FirstOrDefault(b => b.ingredientId == id);

            if (ingredient == null)
            {
                return NotFound();
            }

            db.Ingredients.Remove(ingredient);
            db.SaveChanges();

            return NoContent();
        }

    }
}
