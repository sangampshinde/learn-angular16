import { Component } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component {

  title = 'ngOnChanges';
  message = '';
  customer: Customer = new Customer();
  name= '';
  code= 0;
 
  updateCustomer() {
    this.customer.name = this.name;
    this.customer.code = this.code;
  }
}
