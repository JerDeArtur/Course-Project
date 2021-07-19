import { RecipesService } from './../recipes.service';
import { Recipe } from './../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes: Recipe[];

  constructor(private recService: RecipesService) {
    this.recipes = recService.getRecipes();
  }

  ngOnInit(): void {
  }


}
