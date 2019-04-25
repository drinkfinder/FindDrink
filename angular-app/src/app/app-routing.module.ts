import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { DrinksComponent }      from './drinks/drinks.component';
import { DrinkDetailComponent }  from './drink-detail/drink-detail.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientSearchComponent } from './ingredient-search/ingredient-search.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { DrinkSearchComponent } from './drink-search/drink-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:drinkId', component: DrinkDetailComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'ingredient-search', component: IngredientSearchComponent},
  { path: 'drink-search', component: DrinkSearchComponent}
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
