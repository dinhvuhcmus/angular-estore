import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText: string = "";
  
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  
  onSearchText(searchInputElement: HTMLInputElement) {
    this.searchText = searchInputElement.value;
    //Raise the event for product list running
    this.searchTextChanged.emit(this.searchText);
  }

}
