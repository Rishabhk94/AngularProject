import { Injectable,Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http:HttpClient) { }

  private productSorted = false;
  
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  ProductsUrl="assets/products.json"
  GetProducts(){
    return this.http.get(this.ProductsUrl)
  }

  Compare(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  SortProducts(){
    this.productSorted=!this.productSorted
    this.change.emit(this.productSorted)
  }
}
