import { RecipesService } from './recipes.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  selRecipe: Recipe;

  constructor(private recService: RecipesService) {
    recService.selected.subscribe((rec: Recipe)=>{this.selRecipe=rec})
  }

  ngOnInit(): void {
  }

}
