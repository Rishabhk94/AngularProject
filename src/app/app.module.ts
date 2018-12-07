import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/NavbarComponent/navbar/navbar.component';
import { ProductTileComponent } from './Components/product-tile/product-tile.component';
import { NewTechPageComponent } from './Components/new-tech-page/new-tech-page.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  // default route set to home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home",component: HomePageComponent},
  { path: "new-tech",component: NewTechPageComponent}
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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
