import { Component } from '@angular/core';

@Component({
  selector: 'app-practise7',
  templateUrl: './practise7.component.html',
  styleUrls: ['./practise7.component.css']
})
export class Practise7Component {

  items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}, {name: 'Four', val: 3}, {name: 'Five', val: 3}];
    selectedValue1: string= 'One';
    

}

class item {
  name:string;
  val:number;
}

