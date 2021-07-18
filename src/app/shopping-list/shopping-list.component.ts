import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Ingredient1',1),
    new Ingredient('Ingredient2',2)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
