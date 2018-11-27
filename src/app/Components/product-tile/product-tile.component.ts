import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {
  
  constructor() { }
 
  @Input() ImgUrl:string="assets/angular-3";

  ngOnInit() {
    console.log("This is it" + this.ImgUrl)
  }
  
}
