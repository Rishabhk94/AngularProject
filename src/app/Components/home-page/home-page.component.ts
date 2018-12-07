import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../Services/product-data.service';
import { Products } from '../../interfaces/products';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private productDataService:ProductDataService) { }
  products;

  ngOnInit() {
    // call getProducts on intialization
    this.getProducts()
    this.productDataService.change.subscribe((productSorted)=>{
      if (productSorted==true){
        // call sort method
        this.SortProducts()
      }
      else{
        // restore original order
        this.getProducts()
      }
    })
  }

  // get data via service
  getProducts():void{
    this.productDataService.GetProducts()
    .subscribe( 
      data => this.products = data
    )
  }

  SortProducts():void{
    // sort products using the compare function mentioned in service
    this.products.sort(this.productDataService.Compare)
  }

}
