import { Component, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding3',
  templateUrl: './twowaydatabinding3.component.html',
  styleUrls: ['./twowaydatabinding3.component.css']
})
export class Twowaydatabinding3Component {

  @Input() count:number=0;
  @Output() countChange:EventEmitter<number>=new EventEmitter<number>();

  increase(){
    this.count++;
    this.countChange.emit(this.count);
  }

  clear(){
    this.count=0;
  }

}
