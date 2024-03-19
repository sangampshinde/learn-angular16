import { Component } from '@angular/core';

@Component({
  selector: 'app-practise17',
  templateUrl: './practise17.component.html',
  styleUrls: ['./practise17.component.css']
})
export class Practise17Component {

  numbers = [30, 40, 50, 60, 70, 80];

  getClass(num:number) {
    if (num <= 50) {
      return 'primary';
    }
    else{
      return 'secondary';
    } 
    
  }

}
