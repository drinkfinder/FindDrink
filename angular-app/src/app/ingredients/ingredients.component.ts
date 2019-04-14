import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients(): void {
    this.ingredientService.getIngredients()
    .subscribe(ingredients => this.ingredients = ingredients);
  }
  // maybe undo as unknown on this method
  add(name: string): void {
    let ingredientToEdit = {
      ingredientId: 69,
    ingredientName: name
    
    }

    if (!name) { return; }
    this.ingredientService.addIngredient({ ingredientToEdit } as unknown as Ingredient)
      .subscribe(ingredientToEdit => {
        this.ingredients.push(ingredientToEdit);
      });
  }

  delete(ingredient: Ingredient): void {
    this.ingredients = this.ingredients.filter(h => h !== ingredient);
    this.ingredientService.deleteIngredient(ingredient).subscribe();
  }

}