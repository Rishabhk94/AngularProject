import { Injectable,Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http:HttpClient) { }

  private productSorted:boolean = false;
  private ProductsUrl:string="assets/products.json"
  
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  GetProducts(){
    return this.http.get(this.ProductsUrl)
  }

  Compare(a,b):number{
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  SortProducts():void{
    this.productSorted=!this.productSorted
    this.change.emit(this.productSorted)
  }
}
