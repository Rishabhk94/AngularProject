import { Injectable,EventEmitter,Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarDataService {

  constructor() { }
  public sidBarOpen=false
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  

  ToggleSideBar(){
    this.sidBarOpen=!this.sidBarOpen
    this.change.emit(this.sidBarOpen)
  }

}
