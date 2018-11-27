import { Component,OnInit } from '@angular/core';
import {SidebarDataService} from './Services/sidebar-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(public sidebarDataService:SidebarDataService){

    }
    sideBarState=false;
    ngOnInit(){
        this.sidebarDataService.change.subscribe(isOpen => {
            this.sideBarState = isOpen;
          });
    }

    ToggleSideBar() {
        this.sidebarDataService.ToggleSideBar()
    }


    
  title = 'The Product Catalogue';
  products=[
    {
        "name":"NodeJS"
    },
    {
        "name":"HTML"
    },
    {
        "name":"CSS"
    },
    {
        "name":"Javascript"
    }
]

}
