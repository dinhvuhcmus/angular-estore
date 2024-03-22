import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText: string = "";
  
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput') searchInputEl: ElementRef;
  
  onSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    //Raise the event for product list running
    this.searchTextChanged.emit(this.searchText);
  }

}
