import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Drink } from './drink';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  private drinksUri = 'https://localhost:5001/api/drinks';
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('${operation} failed: ${error.message}' );
      return of (result as T);
    };
  }
  constructor(private http: HttpClient) {}

  getDrinks() {
    return this.http.get<Drink[]>(this.drinksUri).pipe(
      tap(_ => console.log('fetched drinks')),
      catchError(this.handleError<Drink[]>('getDrinks', []))
    );
  }
}
