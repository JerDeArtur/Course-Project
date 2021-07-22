import { RecipesService } from './../../recipes.service';
import { Recipe } from './../../recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('rec') recipe: Recipe;
  @Input() id: number;

  constructor(private recService: RecipesService) { }

  ngOnInit(): void {
  }

}
