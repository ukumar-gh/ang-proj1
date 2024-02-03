import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter < Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test desc', 'https://sallysbakingaddiction.com/wp-content/uploads/2020/02/garlic-knots.jpg'),
    new Recipe('Another Test Recipe', 'Test desc', 'https://sallysbakingaddiction.com/wp-content/uploads/2020/02/garlic-knots.jpg'),
  ];

  constructor() { }

  ngOnInit() {
    
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
