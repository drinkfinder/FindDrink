import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Drink } from './drink';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class DrinkService {

  private drinksUrl = 'https://localhost:5001/api/drinks';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET drinks from the server */
  getDrinks (): Observable<Drink[]> {
    return this.http.get<Drink[]>(this.drinksUrl)
      .pipe(
        tap(_ => this.log('fetched drinks')),
        catchError(this.handleError<Drink[]>('getDrinks', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getDrinkNo404<Data>(id: number): Observable<Drink> {
    const url = `${this.drinksUrl}/?id=${id}`;
    return this.http.get<Drink[]>(url)
      .pipe(
        map(drinks => drinks[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} drink id=${id}`);
        }),
        catchError(this.handleError<Drink>(`getDrink id=${id}`))
      );
  }

  /** GET drink by id. Will 404 if id not found */
  getDrink(id: number): Observable<Drink> {
    const url = `${this.drinksUrl}/${id}`;
    return this.http.get<Drink>(url).pipe(
      tap(_ => this.log(`fetched drink id=${id}`)),
      catchError(this.handleError<Drink>(`getDrink id=${id}`))
    );
  }

  /* GET drinks whose name contains search term */
  searchDrinks(term: string): Observable<Drink[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Drink[]>(`${this.drinksUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found drinks matching "${term}"`)),
      catchError(this.handleError<Drink[]>('searchDrinks', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new drink to the server */
  addDrink (drink: Drink): Observable<Drink> {
    return this.http.post<Drink>(this.drinksUrl, drink, httpOptions).pipe(
      tap((newDrink: Drink) => this.log(`added drink w/ id=${newDrink.drinkId}`)),
      catchError(this.handleError<Drink>('addDrink'))
    );
  }

  /** DELETE: delete the drink from the server */
  deleteDrink (drink: Drink | number): Observable<Drink> {
    const id = typeof drink === 'number' ? drink : drink.drinkId;
    const url = `${this.drinksUrl}/${id}`;

    return this.http.delete<Drink>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted drink id=${id}`)),
      catchError(this.handleError<Drink>('deleteDrink'))
    );
  }

  /** PUT: update the drink on the server */
  updateDrink (drink: Drink): Observable<any> {
    return this.http.put(this.drinksUrl, drink, httpOptions).pipe(
      tap(_ => this.log(`updated drink id=${drink.drinkId}`)),
      catchError(this.handleError<any>('updateDrink'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a DrinkService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`DrinkService: ${message}`);
  }
}