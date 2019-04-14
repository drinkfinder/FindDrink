import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Drink } from '../drink';
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-drink-search',
  templateUrl: './drink-search.component.html',
  styleUrls: [ './drink-search.component.css' ]
})
export class DrinkSearchComponent implements OnInit {
  drinks$: Observable<Drink[]>;
  private searchTerms = new Subject<string>();

  constructor(private drinkService: DrinkService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.drinks$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.drinkService.searchDrinks(term)),
    );
  }
}
