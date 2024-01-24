import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test desc', 'https://sallysbakingaddiction.com/wp-content/uploads/2020/02/garlic-knots.jpg'),
  ];

  constructor() { }

  ngOnInit() {
    
  }
}
