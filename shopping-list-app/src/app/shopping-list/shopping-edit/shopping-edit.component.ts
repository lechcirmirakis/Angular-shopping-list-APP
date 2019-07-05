import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientCreated = new EventEmitter<{ name: string, amount: number }>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.ingredientCreated.emit({
      name: this.nameInputRef.nativeElement.value,
      amount: this.amountInputRef.nativeElement.value
    })
    this.nameInputRef.nativeElement.value = '',
    this.amountInputRef.nativeElement.value = ''
  }
}
