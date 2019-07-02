import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	@Output() recipeWasSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe('A Test Recipe', 'This is test descript', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg'),
		new Recipe('A Test Recipe Another', 'This is test descript Another', 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg')
	];

	constructor() { }

	ngOnInit() {
	}

	choseRecipe(recipe: Recipe) {
		console.log('wybrałem recepte');
		this.recipeWasSelected.emit(recipe);
	}

}
