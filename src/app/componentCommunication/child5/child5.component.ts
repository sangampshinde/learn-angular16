import { Component } from '@angular/core';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component {

  count = 0;
 
     increment() {
        this.count++;
      }
    decrement() {
        this.count--;
    }
    
}
