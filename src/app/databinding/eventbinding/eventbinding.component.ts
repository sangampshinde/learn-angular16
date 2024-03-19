import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {

//example 1

title='event-binding examples';
clickCount=0;
clickMe(){
  this.clickCount++;
}

//example 2
clickCount1=0;
clickMe2(){
  this.clickCount1++;
}

}
