import { Component } from '@angular/core';

@Component({
  selector: 'app-practise9',
  templateUrl: './practise9.component.html',
  styleUrls: ['./practise9.component.css']
})
export class Practise9Component {
   items:item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}, {name: 'Four', val: 3}, {name: 'Five', val: 3}];
   selectVal:string='One'
}
class item {
  name: string;
  val: number;
}
