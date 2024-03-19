import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding1',
  templateUrl: './twowaydatabinding1.component.html',
  styleUrls: ['./twowaydatabinding1.component.css']
})
export class Twowaydatabinding1Component {
  value='';
  Clear(){
    this.value='';
  }

}
