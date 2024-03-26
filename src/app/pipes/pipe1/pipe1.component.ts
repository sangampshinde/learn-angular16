import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe1',
  templateUrl: './pipe1.component.html',
  styleUrls: ['./pipe1.component.css']
})
export class Pipe1Component {
     title:string='Inroduction to pipe'
      toDate:Date=new Date();
}
