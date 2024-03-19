import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component {
  title='$event Payload event binding example 3'



  value=''
  handleInput(event:any){
    this.value=(event.target as HTMLInputElement).value
  }





//template referance variable

  val=''
  handleInput1(element:any) {
    this.val=element.value;
  }







  //Key event filtering (with key.enter)

  value1='';









  
  value2='';
  value3='';
  
  


  
  
}
