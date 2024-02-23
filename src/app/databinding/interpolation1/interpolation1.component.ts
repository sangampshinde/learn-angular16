import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation1',
  templateUrl: './interpolation1.component.html',
  styleUrls: ['./interpolation1.component.css']
})
export class Interpolation1Component {
  title = 'Invoke a method in the component';
  getTitle(): string {
     return this.title;
 }

}
