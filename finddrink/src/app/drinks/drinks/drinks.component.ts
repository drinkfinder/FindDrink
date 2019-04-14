
import { Component, OnInit } from '@angular/core';
import { Drink } from '../drink';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

 drink: Drink[] = [
  {
    drinkId: 1,
    drinkName: "vodka lemonade",
    drinkInstruction: "vodka lemonade"
  },
  {
    drinkId: 2,
    drinkName: "7-7",
    drinkInstruction: "whiskey gingerale"
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
