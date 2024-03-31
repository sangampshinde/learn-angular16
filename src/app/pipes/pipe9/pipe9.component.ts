import { Component ,OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipe9',
  templateUrl: './pipe9.component.html',
  styleUrls: ['./pipe9.component.css']
})
export class Pipe9Component  implements OnInit {
  title = 'pipesInService';
 
  toDate:any;
 
  constructor(private datePipe:DatePipe) {
  }
 
  ngOnInit():any {
 
    this.toDate = this.datePipe.transform(new Date());
  }

 
}
