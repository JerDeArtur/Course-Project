import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private ingredients: Ingredient[] = [];

  updateList = new EventEmitter<any>();

  constructor() { }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.updateList.emit();
  }

  addIngredients(ingrs: Ingredient[]){
    this.ingredients = [...this.ingredients,...ingrs];
    this.updateList.emit();
  }

  getIngredients(){
    return [...this.ingredients];
  }
}
