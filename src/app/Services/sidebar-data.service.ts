import { Injectable,EventEmitter,Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarDataService {

  constructor() { }
  public sideBarOpen=false
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  ToggleSideBar(){
    this.sideBarOpen=!this.sideBarOpen
    this.change.emit(this.sideBarOpen)
  }

}
