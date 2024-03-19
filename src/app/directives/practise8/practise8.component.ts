import { Component } from '@angular/core';

@Component({
  selector: 'app-practise8',
  templateUrl: './practise8.component.html',
  styleUrls: ['./practise8.component.css']
})
export class Practise8Component {

  items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}, {name: 'Four', val: 3}, {name: 'Five', val: 3}];
  selectedValue: string= 'One';
}
class item {
  name: string;
  val: number;
}
