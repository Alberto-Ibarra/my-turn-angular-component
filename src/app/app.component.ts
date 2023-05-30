import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible: boolean = true

  hideList(){
    this.isVisible = !this.isVisible
  }

  title = 'angular-my-turn';
  friendslist = [
    {
      name: 'Albert',
      age: 31
    },
    {
      name: 'Dylan',
      age: 8
    },
    {
      name: 'Daniel',
      age: 29
    }
  ]
}
