using System;

namespace tests
{
    public class IngredientTest
    {
        public int ingredientId { get; set; }
        public string ingredientName { get; set; }
        public int isSelected { get; set; }

        public void ChangeIsSelected(int incomingNumber)
        {
            //arrange
            var ingredient = new IngredientTest(
            {
                ingredientId = 1,
                ingredientName = "Bourbon",
                isSelected = incomingNumber
                
            };

            //act
            var newNumber = 1;
            ingredient.ChangeIsSelected(newNumber);

            //assert 
            var expectedSelected = 1;
            var actualSelected = ingredient.isSelected;

            AssemblyLoadEventArgs.Equals(expectedSelected, actualSelected);
        }

    // Test for Changing an Ingredient Name

        public void ChangeName(string ingredientTitle)
        {
            //arrange
            var ingredient = new IngredientTest()
            {
                ingredientId = 1,
                ingredientName = "Whiskey",
                isSelected = 0

            };

            //act

            var newName = "Chad's Whiskey";
            ingredient.ChangeName(newName);

            //assert 
            var expectedName = newName;
            var actualName = ingredient.ingredientName;

            AssemblyLoadEventArgs.Equals(expectedName, actualName);

        }

       
    }

}
