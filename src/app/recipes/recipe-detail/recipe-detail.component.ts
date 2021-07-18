import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input('recipeDetails') recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
