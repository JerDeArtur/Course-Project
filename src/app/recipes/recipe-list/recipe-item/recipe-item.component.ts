import { Recipe } from './../../recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('rec') recipe: Recipe;
  @Output() onSelection = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.onSelection.emit();
  }

}
