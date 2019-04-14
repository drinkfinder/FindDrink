using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using drinkfinder.Models;
using Microsoft.AspNetCore.Mvc;

namespace drinkfinder.Api.Controllers
{
    [Route("api/drinks")]
    [ApiController]
    public class DrinksController : ControllerBase{

        private readonly DrinkFinderContext db;
    
        public DrinksController(DrinkFinderContext db)
        {

            this.db = db;

            if (this.db.Drinks.Count() == 0){
                this.db.Drinks.Add(new Drink(){
                    drinkId = 1,
                    drinkName = "Vodka Lemonade",
                    drinkInstruction = "woot"
                });

                this.db.Drinks.Add(new Drink(){
                    drinkId = 2,
                    drinkName = "drink",
                    drinkInstruction = "yup"
                });
                
            }
            this.db.SaveChanges();
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(db.Drinks);
        }

        [HttpGet("{id}", Name = "GetDrink")]
        public IActionResult GetDrink(int id)
        {
            var drink = db.Drinks.FirstOrDefault(b => b.drinkId == id);

            if (drink == null)
            {
                return NotFound();
            }

            return Ok(drink);
        }
        [HttpPost]
        public IActionResult Post([FromBody]Drink drink)
        {
            if (drink == null)
            {
                return BadRequest();
            }

            db.Drinks.Add(drink);
            db.SaveChanges();

            return CreatedAtRoute("GetDrink", new { id = drink.drinkId }, drink);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Drink drink)
        {
            if (drink == null || drink.drinkId != id)
            {
                return BadRequest();
            }

            var drinkToEdit = db.Drinks.FirstOrDefault(b => b.drinkId == id);
            if (drinkToEdit == null)
            {
                return NotFound();
            }

            drinkToEdit.drinkName = drink.drinkName;
            drinkToEdit.drinkInstruction = drink.drinkInstruction;

            db.Drinks.Update(drinkToEdit);
            db.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var drink = db.Drinks.FirstOrDefault(b => b.drinkId == id);

            if (drink == null)
            {
                return NotFound();
            }

            db.Drinks.Remove(drink);
            db.SaveChanges();

            return NoContent();
        }

    }
}
