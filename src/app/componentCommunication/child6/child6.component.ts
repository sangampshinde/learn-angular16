import { Component } from '@angular/core';

@Component({
  selector: 'app-child6',
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.css']
})
export class Child6Component {
  count = 0;

  increment() {
     this.count++;
   }
 decrement() {
     this.count--;
 }
}
