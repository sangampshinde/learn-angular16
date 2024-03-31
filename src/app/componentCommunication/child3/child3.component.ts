import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {
  private _count=0;

  @Input()
  set count(count: number) {
    this._count = count;
    console.log(count);
  }
  get count(): number { return this._count; }


}
