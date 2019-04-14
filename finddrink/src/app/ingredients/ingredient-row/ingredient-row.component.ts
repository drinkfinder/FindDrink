import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-ingredient-row',
  templateUrl: './ingredient-row.component.html',
  styleUrls: ['./ingredient-row.component.css']
})
export class IngredientRowComponent implements OnInit {

  @Input() ingredient: any;

  ngOnInit() {
  }

}
