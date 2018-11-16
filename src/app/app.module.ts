import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/NavbarComponent/navbar/navbar.component';
import { ProductTileComponent } from './Components/product-tile/product-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductTileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
