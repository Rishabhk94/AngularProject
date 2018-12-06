import { Component, OnInit } from '@angular/core';
import { SidebarDataService } from '../../Services/sidebar-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor( private sidebarDataService:SidebarDataService) { }
  products;

  ngOnInit() {
    this.products=this.sidebarDataService.products
  }

}
