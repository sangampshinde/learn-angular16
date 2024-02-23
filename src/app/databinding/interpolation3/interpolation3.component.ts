import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation3',
  templateUrl: './interpolation3.component.html',
  styleUrls: ['./interpolation3.component.css']
})
export class Interpolation3Component {

  title='Perform some mathematical operations';
  max(a:number,b:number){
    return Math.max(a,b);
  }


}
