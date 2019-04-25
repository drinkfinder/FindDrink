
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Ingredient } from './ingredient';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class UserIngredientsService {

  private useringredientsUrl = 'https://localhost:5001/api/useringredients';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET ingredients from the server */
  getUserIngredients (): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.useringredientsUrl)
      .pipe(
        tap(_ => this.log('fetched ingredients')),
        catchError(this.handleError<Ingredient[]>('getUserIngredients', []))
      );
  }

  /** GET ingredient by id. Return `undefined` when id not found */
  getUserIngredientNo404<Data>(id: number): Observable<Ingredient> {
    const url = `${this.useringredientsUrl}/?id=${id}`;
    return this.http.get<Ingredient[]>(url)
      .pipe(
        map(useringredients => useringredients[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} useringredient id=${id}`);
        }),
        catchError(this.handleError<Ingredient>(`getUserIngredient id=${id}`))
      );
  }

  /** GET ingredient by id. Will 404 if id not found */
  getUserIngredient(id: number): Observable<Ingredient> {
    const url = `${this.useringredientsUrl}/${id}`;
    return this.http.get<Ingredient>(url).pipe(
      tap(_ => this.log(`fetched useringredient id=${id}`)),
      catchError(this.handleError<Ingredient>(`getUserIngredient id=${id}`))
    );
  }

  /* GET ingredients whose name contains search term */
  searchUserIngredients(term: string): Observable<Ingredient[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Ingredient[]>(`${this.useringredientsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found useringredients matching "${term}"`)),
      catchError(this.handleError<Ingredient[]>('searchUserIngredients', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new ingredient to the server */
  addUserIngredient (useringredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(this.useringredientsUrl, useringredient, httpOptions).pipe(
      tap((newIngredient: Ingredient) => this.log(`added useringredient w/ id=${newIngredient.ingredientId}`)),
      catchError(this.handleError<Ingredient>('addUserIngredient'))
    );
  }

  /** DELETE: delete the ingredient from the server */
  deleteIngredient (useringredient: Ingredient | number): Observable<Ingredient> {
    const id = typeof useringredient === 'number' ? useringredient : useringredient.ingredientId;
    const url = `${this.useringredientsUrl}/${id}`;

    return this.http.delete<Ingredient>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted useringredient id=${id}`)),
      catchError(this.handleError<Ingredient>('deleteUserIngredient'))
    );
  }

  /** PUT: update the ingredient on the server */
  updateUserIngredient (useringredient: Ingredient): Observable<any> {
    return this.http.put(this.useringredientsUrl, useringredient, httpOptions).pipe(
      tap(_ => this.log(`updated useringredient id=${useringredient.ingredientId}`)),
      catchError(this.handleError<any>('updateUserIngredient'))
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
    this.messageService.add(`UserIngredientsService: ${message}`);
  }
}