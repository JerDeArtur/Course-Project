import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeGuard } from './recipes/recipe-guard.service';
import { EmptyMessageComponent } from './recipes/empty-message/empty-message.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path : '',
        component: EmptyMessageComponent
      },
      {
        path: 'new',
        component: RecipeEditComponent
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
        canActivate: [RecipeGuard]
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent
      }

    ]
  },
  {
    path: 'shopping',
    component: ShoppingListComponent
  }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
