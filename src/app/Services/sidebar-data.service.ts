import { Injectable,EventEmitter,Output } from '@angular/core';
import { Store } from '@ngrx/store'

@Injectable({
  providedIn: 'root'
})
export class SidebarDataService {

  constructor(private store:Store<any>) { }
  //public sideBarOpen=false
  //@Output() change: EventEmitter<boolean> = new EventEmitter();

  //ToggleSideBar(){
  //  this.sideBarOpen=!this.sideBarOpen
  //  this.change.emit(this.sideBarOpen)
  //}

  getState() {
    return this.store.select('appReducer')
  }

}
