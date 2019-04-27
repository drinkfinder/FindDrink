using System;

namespace tests
{
    public class DrinkTest
    {
        public int drinkId { get; set; }
        public string drinkName { get; set; }
        public string drinkInstruction { get; set }
        public int drinkSelected { get; set; }

        public void ChangeDrinkSelected(int number)
        {
            //arrange
            var drink = new DrinkTest(
            {
                drinkId = 1,
                drinkName = "Mojito",
                drinkInstruction = "Mint sprigs muddled with 2 tsp. sugar and 1 oz lime juice. Add 1.5 oz Rum and top with soda water. Garnished with sprig of mint leaves. Served with a straw."
                drinkSelected = 0
                
            };

            //act
            var newNumber = 1;
            drink.ChangeDrinkSelected(number);

            //assert 
            var expectedSelected = 1;
            var actualSelected = drink.drinkSelected;

            AssemblyLoadEventArgs.Equals(expectedSelected, actualSelected);
        }

    // Test for Changing an Drink Name

        public void ChangeName(string drinkTitle)
        {
            //arrange
            var drink = new DrinkTest()
            {
                drinkId = 1,
                drinkName = "Manhattan",
                drinkInstruction = "Maraschino cherry (Garnish), Dash Angostura bitters, 2 oz Rye or Canadian whisky, 3/4 oz Sweet red vermouth, to top it off add a dash .json, a sprinkle of html, and 3 tsp. of entity framework unicorn’s blood.”,"
                drinkSelected = 0

            };

            //act

            var newName = "Chad's Manhattan";
            drink.ChangeName(newName);

            //assert 
            var expectedName = newName;
            var actualName = drink.drinkName;

            AssemblyLoadEventArgs.Equals(expectedName, actualName);

        }

       
    }

}
