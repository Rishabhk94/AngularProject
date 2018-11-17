import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
