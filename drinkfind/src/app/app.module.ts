import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { DrinksComponent } from './drinks/drinks.component';


import { AddDrinkComponent } from './add-drink/add-drink.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    DrinksComponent,
    AddDrinkComponent
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
