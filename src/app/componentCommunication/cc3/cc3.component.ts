import { Component } from '@angular/core';

@Component({
  selector: 'app-cc3',
  templateUrl: './cc3.component.html',
  styleUrls: ['./cc3.component.css']
})
export class Cc3Component {

  title = 'Component Interaction';
  ClickCounter = 5;

  increment() {
    this.ClickCounter++;
  }

  Decrement() {
    this.ClickCounter--;
  }
  
}
