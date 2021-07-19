import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {

  private recipes: Recipe[] = [
    new Recipe('Pasta?',
    'Looks like pasta... maybe.',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F02%2F2276935.jpg&w=426&h=285&c=sc&poi=face&q=85',
    [
      new Ingredient('Pasta',1),
      new Ingredient('Pasta sauce',1)
    ]
    ),
    new Recipe('Cake?',
    'Some chocolate backed somethih',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F05%2F08%2FChewy-Peanut-Butter-Brownies-by-abcdeelishus.jpg&w=426&h=285&c=sc&poi=face&q=85',
    [
      new Ingredient('Flour',1),
      new Ingredient('Chocolate bar',2),
      new Ingredient('Milk',1)
    ]
    )
  ];

  selected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes(){
    return [...this.recipes]
  }
}
