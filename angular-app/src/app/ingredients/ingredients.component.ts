import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserIngredientsService } from '../user-ingredients.service';


@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[];
  userIngredients: Ingredient[];
  userSelected: string[];
  

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.getIngredients();
    
  }
  

  getIngredients(): void {
    this.ingredientService.getIngredients()
    .subscribe(ingredients => this.ingredients = ingredients);
  }
  // maybe undo as unknown on this method
  add(ingredient: Ingredient): void {
      ingredient.isSelected = 1;
      
      this.ingredientService.updateIngredient(ingredient).subscribe();
     
      }

      
    
    
  

  delete(ingredient: Ingredient): void {
    this.ingredients = this.ingredients.filter(h => h !== ingredient);
    this.ingredientService.deleteIngredient(ingredient).subscribe();
  }

}