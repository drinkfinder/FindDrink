import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DrinksComponent } from './drinks/drinks/drinks.component';
import { DrinkRowComponent } from './drinks/drink-row/drink-row.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientRowComponent } from './ingredients/ingredient-row/ingredient-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrinksComponent,
    DrinkRowComponent,
    NavbarComponent,
    IngredientsComponent,
    IngredientRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
