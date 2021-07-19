import { ShoppingService } from './../shopping.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput',{static: false}) nameInput: ElementRef;
  @ViewChild('amountInput',{static: false}) amountInput: ElementRef;

  constructor(private shService: ShoppingService) {}

  ngOnInit(): void {
  }

  add(){
    this.shService.addIngredient(new Ingredient(
      (<HTMLInputElement> this.nameInput.nativeElement).value,
      parseInt((<HTMLInputElement> this.amountInput.nativeElement).value)
    ));
  }

}
