import { Component } from '@angular/core';

@Component({
  selector: 'app-datepipe',
  templateUrl: './datepipe.component.html',
  styleUrls: ['./datepipe.component.css']
})
export class DatepipeComponent {
  toDate: Date = new Date();
  numDate=1590319189931;
  strDate="Sun May 24 2020 19:16:23";

}
