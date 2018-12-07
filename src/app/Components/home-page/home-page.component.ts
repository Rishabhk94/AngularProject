import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../Services/product-data.service';

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
    this.productDataService.change.subscribe((SortProducts)=>{
      if (SortProducts==true){
        this.SortProducts()
        console.log("sorted!!")
      }
    })
  }

  // get data via service
  getProducts() {
    this.productDataService.GetProducts()
    .subscribe( 
      data => this.products = data
    )
  }

  SortProducts(){
    this.products.sort(this.productDataService.Compare)
  }

}
