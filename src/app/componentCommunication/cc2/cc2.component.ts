import { Component } from '@angular/core';

@Component({
  selector: 'app-cc2',
  templateUrl: './cc2.component.html',
  styleUrls: ['./cc2.component.css']
})
export class Cc2Component {
  
  title = 'Component Interaction';
  Counter = 5;

  increment() {
    this.Counter++;
  }

  Decrement() {
    this.Counter--;
  }
  
}
