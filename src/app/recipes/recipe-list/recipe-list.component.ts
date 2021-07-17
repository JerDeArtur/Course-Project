import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Recipe','Some recipe description','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F02%2F2276935.jpg&w=426&h=285&c=sc&poi=face&q=85'),
    new Recipe('Recipe2','Some recipe2 description','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F05%2F08%2FChewy-Peanut-Butter-Brownies-by-abcdeelishus.jpg&w=426&h=285&c=sc&poi=face&q=85')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
