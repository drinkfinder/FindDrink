using Microsoft.EntityFrameworkCore;
using Npgsql;

namespace drinkfinder.Models
{
    public class DrinkFinderContext : DbContext
    {
        public DrinkFinderContext(DbContextOptions<DrinkFinderContext> options) : base(options)

        {

        }


        protected override void OnModelCreating(ModelBuilder builder) =>
        base.OnModelCreating(builder);
        public DbSet<Drink> Drinks { get; set; }
        public DbSet<Ingredient> Ingredients { get; set;}
        public DbSet<UserIngredient> UserIngredients {get; set;}


       
    }
    
}