using Microsoft.EntityFrameworkCore;

namespace drinkfinder.Models
{
    public class DrinkFinderContext : DbContext
    {
        public DrinkFinderContext(DbContextOptions<DrinkFinderContext> options) : base(options)

        {}

        public DbSet<Drink> Drinks { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
    
    }
}