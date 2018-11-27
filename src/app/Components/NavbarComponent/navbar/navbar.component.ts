import { Component, OnInit } from '@angular/core';
import {SidebarDataService} from '../../../Services/sidebar-data.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private sidebarDataService:SidebarDataService) { }

  ngOnInit() {
  }

  OpenSideBar() {
    this.sidebarDataService.ToggleSideBar()
  }

}
