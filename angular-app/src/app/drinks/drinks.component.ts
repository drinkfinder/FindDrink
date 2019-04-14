import { Component, OnInit } from '@angular/core';

import { Drink } from '../drink';
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  drinks: Drink[];

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
    this.getDrinks();
  }

  getDrinks(): void {
    this.drinkService.getDrinks()
    .subscribe(drinks => this.drinks = drinks);
  }
  // figure this out
  /*add(name: string): void {
    Drink new1 {
      instruction: 'mix',
      name = name.trim();
    }
    
    if (!name) { return; }
    this.drinkService.addDrink({ name } as Drink)
      .subscribe(drink => {
        this.drinks.push(drink);
      });
  }*/

  delete(drink: Drink): void {
    this.drinks = this.drinks.filter(h => h !== drink);
    this.drinkService.deleteDrink(drink).subscribe();
  }

}