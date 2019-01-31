import { Component, OnInit } from '@angular/core';
import { SidebarDataService } from '../../../Services/sidebar-data.service';
import { ProductDataService } from '../../../Services/product-data.service';
import { Router,Event,NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private productSorted:boolean=false;
  private displaySort:boolean;

  constructor(private sidebarDataService:SidebarDataService,
              private productDataService:ProductDataService,
              private router:Router) { 

    this.router.events.subscribe((event:Event)=>{
      if (event instanceof NavigationEnd) {
        // check route and update displaySort variable 
        this.CheckRoute()
      }
    })
  }

  ngOnInit() {
    this.productDataService.change.subscribe((productSorted)=>{
      this.productSorted=productSorted
    })
  }

  //To toggle sidebar via service
  OpenSideBar() {
    //this.sidebarDataService.ToggleSideBar()
  }

  //To sort data using service
  SortProducts():void{
    this.productDataService.SortProducts()
  }
  
  //To check route
  CheckRoute():void{
    if (this.router.url=='/home'){
      this.displaySort=true
    }
    else{
      this.displaySort=false
    }
  }

}
