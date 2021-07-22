import { RecipesService } from './recipes.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class RecipeGuard implements CanActivate{

  constructor(private recipeService: RecipesService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this.recipeService.getRecipes()[route.params['id']]){
      return true;
    }
    this.router.navigate(['/recipes'])
    return false;
  }
}
