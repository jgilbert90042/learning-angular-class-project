import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() itemClickEvent = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('test', 'This is simply a test 1.', 'https://images.media-allrecipes.com/userphotos/560x315/4565477.jpg'),
    new Recipe('test', 'This is simply a test 2.', 'https://images.media-allrecipes.com/userphotos/560x315/4565477.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

  onItemClicked(recipe: Recipe) {
    this.itemClickEvent.emit(recipe);
  }

}
