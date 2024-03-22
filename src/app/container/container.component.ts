import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  // name: string = "Vu";

  product = {
    name: "Iphone X",
    price: 100,
    color: "black",
    discountedPrice: 10,
    inStock: 10,
    pImage: "/assets/images/iphone-14-128.jpg"
  }

  
  getDiscountedPrice() {
    return this.product.price - ((this.product.price * this.product.discountedPrice) / 100)
  }
  
  addToCartNumber: number = 0;

  decrementCartValue() {
    if (this.addToCartNumber > 0) {
      this.addToCartNumber--;
    }
  }

  incrementCartValue() {
    if(this.addToCartNumber < this.product.inStock) {
      this.addToCartNumber++;
    }
  }

  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
  }

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent


  // onHandleInput(event: any) {
  //   this.name = event.target.value;
  // }
}
