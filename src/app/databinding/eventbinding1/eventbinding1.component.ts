import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component {

  title='event binding multiple event handeling example 3';
  clickcount=0;
  clickcount1=0;

  clickMe(){
    this.clickcount++;
  }



}
