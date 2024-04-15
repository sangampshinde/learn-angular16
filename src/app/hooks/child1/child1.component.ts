import { Component  ,OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, OnDestroy {

  constructor() {
    console.log('child1:Constructor');
  }

  ngOnInit() {
    console.log('child1:OnInit');
  }

  ngOnDestroy() {
    console.log('child1:OnDestroy');
  }

}
