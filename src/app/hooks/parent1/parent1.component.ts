import { Component,OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit, OnDestroy {
  displayChild = true;

  constructor() {
    console.log('parent1:Constructor');
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnInit() {
    console.log('parent1:OnInit');
  }

  ngOnDestroy() {
    console.log('parent1:OnDestroy');
  }

}
