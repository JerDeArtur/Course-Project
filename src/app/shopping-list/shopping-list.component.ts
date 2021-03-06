import { ShoppingService } from './shopping.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor(private shService: ShoppingService) {
    shService.updateList.subscribe(()=>{this.ingredients = shService.getIngredients()})
  }

  ngOnInit(): void {
  }


}
