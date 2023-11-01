import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe("Fried Rice", "Indonesian fried rice", "https://i.ytimg.com/vi/n9sEF6ApvGA/maxresdefault.jpg")
  ]

}
