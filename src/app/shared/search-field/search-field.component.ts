import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent {
  @Output() searchcriteria = new EventEmitter<String>();
  searchWord: String | undefined;

  constructor() {}

  searchThis() {
    this.searchcriteria.emit(this.searchWord);
  }

  clearAll(){
    this.searchWord = '';
    this.searchThis();
  }
}
