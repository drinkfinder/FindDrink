using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace drinkfinder.Models
{
    public class Ingredient
    {
        public int ingredientId { get; set; }
        public string ingredientName { get; set; }

        public int isSelected { get; set; }

        
    }

}