import { Component,Input, OnInit, OnChanges, SimpleChanges, SimpleChange,ChangeDetectionStrategy} from '@angular/core';
import { Customer } from '../customer';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnChanges, OnInit{

  @Input() message: string;
  @Input() customer: Customer;
  changelog: string[] = [];

  ngOnInit() {
      console.log('OnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log('OnChanges');
      console.log(JSON.stringify(changes));

      // tslint:disable-next-line:forin
      for (const propName in changes) {
           const change = changes[propName];
           const to  = JSON.stringify(change.currentValue);
           const from = JSON.stringify(change.previousValue);
           const changeLog = `${propName}: changed from ${from} to ${to} `;
           this.changelog.push(changeLog);
      }
  }
    
}




