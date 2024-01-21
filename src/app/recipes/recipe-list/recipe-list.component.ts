import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test desc', 'https://www.simplyrecipes.com/thmb/zSvZNZj70cA9uzOgV3oZEV5dvrQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Baklava-LEAD-4-a9d125c8d66547ef9f92c6564a5d5241.jpg')
  ];

  constructor() { }

  ngOnInit() {
    
  }
}
