import { Component } from '@angular/core';

@Component({
  selector: 'app-practise10',
  templateUrl: './practise10.component.html',
  styleUrls: ['./practise10.component.css']
})
export class Practise10Component {
  
 
  
    title: string = 'ngSwitch Example' ;
    num: number= 0;

    items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}, {name: 'Four', val: 3}, {name: 'Five', val: 3}];
    selectedValue1: string= 'One';
    selectedValue2: string= 'One';
    selectedValue3: string= 'One';
    selectedValue4: string= 'One';
}

class item {
  name: string;
  val: number;
}
  

