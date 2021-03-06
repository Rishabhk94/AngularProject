import { Component,OnInit } from '@angular/core';
import { SidebarDataService } from './Services/sidebar-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // SidebarDataService injection
    constructor(public sidebarDataService:SidebarDataService){

    }

    sideBarState=false;
    addTechModal:boolean=false
    ngOnInit(){
      // check state of sidebar on initializing component
        //this.sidebarDataService.change.subscribe(isOpen => {
          //  this.sideBarState = isOpen;
          //});
          this.sidebarDataService.getState().subscribe(state=>{
            this.addTechModal=state.addTechOpen
          })
    }

    // to toggle state of sidebar via service
    ToggleSideBar() {
        //this.sidebarDataService.ToggleSideBar()
    }
}
