import { Component } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent {
  title: string = 'Angular Custom Pipe Example' ;
  celcius: number;
  Fahrenheit: number;   
}
