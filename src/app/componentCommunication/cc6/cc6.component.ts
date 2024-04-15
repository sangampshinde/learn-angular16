import { Component, ViewChild } from '@angular/core';
import { Child6Component } from '../child6/child6.component';


@Component({
  selector: 'app-cc6',
  templateUrl: './cc6.component.html',
  styleUrls: ['./cc6.component.css']
})
export class Cc6Component {

  title = 'Component Interaction - ViewChild';
  
  @ViewChild(Child6Component) child: Child6Component;
  
  increment() {
    this.child.increment();
  }

  decrement() {
    this.child.decrement();
  }
}
