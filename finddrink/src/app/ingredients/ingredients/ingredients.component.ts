
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

 drink: Ingredient[] = [
  {
    ingredientId: 1,
    ingredientName: "kytdyk"
  },
  
  ];

  constructor() { }

  ngOnInit() {
  }

}
