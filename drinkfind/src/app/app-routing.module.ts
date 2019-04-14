import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrinksComponent } from './drinks/drinks.component';
import { IngredientsComponent } from './ingredients/ingredients.component';



const routes: Routes = [
  {path: '', redirectTo: '/drinks', pathMatch: 'full' },
  { path: 'drinks', component: DrinksComponent },
  { path: 'ingredients', component: IngredientsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}