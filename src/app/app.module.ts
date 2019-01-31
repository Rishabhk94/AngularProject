import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/NavbarComponent/navbar/navbar.component';
import { ProductTileComponent } from './Components/product-tile/product-tile.component';
import { NewTechPageComponent } from './Components/feedback-page/feedback-page.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, ReducerManager } from '@ngrx/store';
import { reducers } from "./store/reducers";

const appRoutes:Routes=[
  // default route set to home page
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home",component: HomePageComponent},
  { path: "feedback",component: NewTechPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductTileComponent,
    NewTechPageComponent,
    HomePageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    StoreModule.forRoot(reducers,{}),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
