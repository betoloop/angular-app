import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`
  <app-nav></app-nav>
  <app-list-product></app-list-product>
  <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
}
