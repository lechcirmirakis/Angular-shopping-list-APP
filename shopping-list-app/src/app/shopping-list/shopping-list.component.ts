import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 1),
    new Ingredient('Potatoes', 3),
    new Ingredient('Tomatoes', 5),
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientCreated(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
