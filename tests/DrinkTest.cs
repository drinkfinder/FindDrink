using System;
using Xunit;

namespace tests
{
    public class DrinkTest
    {
        public int drinkId { get; set; }
        public string drinkName { get; set; }
        public string drinkInstruction { get; set; }
        public int drinkSelected { get; set;}

        public void ChangeName(string drinkTitle)
        {
            //arrange
            var drink = new DrinkTest()
            {
                drinkId = 1,
                drinkName = "Whiskey Gingerale",
                drinkInstruction = "Mix whiskey and gingerale",
                drinkSelected = 0

            };

            //act

            var newName = "7-7";
            drink1.ChangeName(newName);

            //assert 
            var expectedName = newName;
            var actualName = drink1.drinkName;

            AssemblyLoadEventArgs.Equals(expectedName, actualName);
        }

        public void ChangeDrinkSelected(int number)
        {
            //arrange
            var drink = new DrinkTest()
            {
                drinkId = 1,
                drinkName = "Vodka Lemonade",
                drinkSelected = number
                
            };

            //act
            var newNumber = 1;
            drink.ChangeDrinkSelected(number);

            //assert 
            var expectedSelected = 1;
            var actualSelected = drink.drinkSelected;

            AssemblyLoadEventArgs.Equals(expectedSelected, actualSelected);
        }

    }
}