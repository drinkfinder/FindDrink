import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

/*import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';*/

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DrinkDetailComponent }  from './drink-detail/drink-detail.component';
import { DrinksComponent }      from './drinks/drinks.component';
import { DrinkSearchComponent }  from './drink-search/drink-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientSearchComponent } from './ingredient-search/ingredient-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
   /* HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DrinksComponent,
    DrinkDetailComponent,
    MessagesComponent,
    DrinkSearchComponent,
    IngredientsComponent,
    IngredientSearchComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }