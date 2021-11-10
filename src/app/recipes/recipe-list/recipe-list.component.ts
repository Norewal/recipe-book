import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://c.pxhere.com/images/a1/57/0ba7cb8200ca6825bc3d76d88882-1620847.jpg!d'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
