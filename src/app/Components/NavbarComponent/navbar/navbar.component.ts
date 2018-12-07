import { Component, OnInit } from '@angular/core';
import { SidebarDataService } from '../../../Services/sidebar-data.service';
import { ProductDataService } from '../../../Services/product-data.service';
import { HomePageComponent } from '../../../Components/home-page/home-page.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  productSorted=false;

  constructor(private sidebarDataService:SidebarDataService,
              private productDataService:ProductDataService) { }

  ngOnInit() {
    this.productDataService.change.subscribe((productSorted)=>{
      this.productSorted=productSorted
    })
  }

  //To toggle sidebar via service
  OpenSideBar() {
    this.sidebarDataService.ToggleSideBar()
  }

  //To sort data using service
  SortProducts(){
    this.productDataService.SortProducts()
  }

}
