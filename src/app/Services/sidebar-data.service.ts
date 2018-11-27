import { Injectable,EventEmitter,Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarDataService {

  constructor() { }
  public sideBarOpen=false
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  
  products=[
    {
        id:"0001",
        name:"NodeJS",
        imgpath:"assets/nodejs-new-pantone-black.png",
        url:"https://nodejs.org/en/"
    },
    {
        id:"0002",
        name:"JavaScript",
        imgpath:"assets/JavaScript-logo.png"
    },
    {
        id:"0003",
        name:"Sass",
        imgpath:"assets/logo-b6e1ef6e.svg"
    },
    {
        id:"0004",
        name:"Angular",
        imgpath:"assets/angular-3.svg"
    },
    {
        id:"0005",
        name:"ReactJS",
        imgpath:"assets/2000px-React-icon.svg.png"
    },
    {
        id:"0006",
        name:"Bootstrap",
        imgpath:"assets/bootstrap-logo.png"
    }
]

  ToggleSideBar(){
    this.sideBarOpen=!this.sideBarOpen
    this.change.emit(this.sideBarOpen)
  }

  SortProducts(){
    this.products=this.products.sort()
  }

}
