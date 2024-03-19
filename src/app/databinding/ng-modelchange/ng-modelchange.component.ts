import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-modelchange',
  templateUrl: './ng-modelchange.component.html',
  styleUrls: ['./ng-modelchange.component.css']
})
export class NgModelchangeComponent {
  
  val=''
  nameChanged(arg:any) {
    this.val="modelchanged " + arg;
  }

}
