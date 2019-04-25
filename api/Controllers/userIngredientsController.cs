using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using drinkfinder.Models;
using Microsoft.AspNetCore.Mvc;

namespace drinkfinder.Api.Controllers
{
    [Route("api/useringredients")]
    [ApiController]
    public class UserIngredientsController : ControllerBase{

        private readonly DrinkFinderContext db;
    
        public UserIngredientsController(DrinkFinderContext db)
        {
            this.db = db;
        }

        //     if (this.db.Ingredients.Count() == 0){
        //         this.db.Ingredients.Add(new Ingredient(){
        //             ingredientId = 1,
        //             ingredientName = "Orange Juice"
        //         });
        //         this.db.Ingredients.Add(new Ingredient(){
        //             ingredientId = 2,
        //             ingredientName = "Whiskey"
        //         });
        //         this.db.Ingredients.Add(new Ingredient(){
        //             ingredientId = 3,
        //             ingredientName = "Gin"
        //         });
                
        //     }
        //     this.db.SaveChanges();
        // }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(db.UserIngredients);
        }

        [HttpGet("{id}", Name = "GetUserIngredient")]
        public IActionResult GetUserIngredient(int id)
        {
            var ingredient = db.UserIngredients.FirstOrDefault(b => b.useringredientId == id);

            if (ingredient == null)
            {
                return NotFound();
            }

            return Ok(ingredient);
        }
        [HttpPost]
        public IActionResult Post([FromBody]UserIngredient ingredient)
        {
            if (ingredient == null)
            {
                return BadRequest();
            }

            db.UserIngredients.Add(ingredient);
            db.SaveChanges();

            return CreatedAtRoute("GetIngredient", new { id = ingredient.useringredientId }, ingredient);
        }
        [HttpPost("{name}", Name = "AddUserIngredient")]
        public IActionResult AddUserIngredient([FromBody]UserIngredient ingredientToEdit)
        {
            if (ingredientToEdit == null)
            {
                return BadRequest();
            }
            
            db.UserIngredients.Add(ingredientToEdit);
            db.SaveChanges();

            return CreatedAtRoute("AddIngredient", new { id = ingredientToEdit.useringredientId }, ingredientToEdit);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]UserIngredient ingredient)
        {
            if (ingredient == null || ingredient.useringredientId != id)
            {
                return BadRequest();
            }

            var ingredientToEdit = db.UserIngredients.FirstOrDefault(b => b.useringredientId == id);
            if (ingredientToEdit == null)
            {
                return NotFound();
            }

            ingredientToEdit.useringredientName = ingredient.useringredientName;
            

            db.UserIngredients.Update(ingredientToEdit);
            db.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var uingredient = db.UserIngredients.FirstOrDefault(b => b.useringredientId == id);

            if (uingredient == null)
            {
                return NotFound();
            }

            db.UserIngredients.Remove(uingredient);
            db.SaveChanges();

            return NoContent();
        }

    }
}
