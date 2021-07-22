import { ShoppingService } from './../../shopping-list/shopping.service';
import { RecipesService } from './../recipes.service';
import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private shService: ShoppingService, private recipeService: RecipesService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.recipe = this.recipeService.getRecipes()[+params['id']];
    })
  }

  toShopping(){
    this.shService.addIngredients(this.recipe.ingredients);
  }

}
