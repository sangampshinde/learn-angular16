 import { Component } from '@angular/core';

@Component({
  selector: 'app-practise20',
  templateUrl: './practise20.component.html',
  styleUrls: ['./practise20.component.css']
})
export class Practise20Component {
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
