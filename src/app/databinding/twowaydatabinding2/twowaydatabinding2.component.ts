import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding2',
  templateUrl: './twowaydatabinding2.component.html',
  styleUrls: ['./twowaydatabinding2.component.css']
})
export class Twowaydatabinding2Component {
   
  @Input() count: number = 0;
  @Output() countChange :EventEmitter<number>= new EventEmitter<number>();

  increment(){
    this.count++;
    this.countChange.emit(this.count);
  }
  reset(){
    this.count=0;
  }
}
