import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation2',
  templateUrl: './interpolation2.component.html',
  styleUrls: ['./interpolation2.component.css']
})
export class Interpolation2Component {

  title="Concatenate two string";

  firstname='Sangam';
  lastname='Shinde';

  getFirstname(){
    return this.firstname;
  }

  getlastname(){
    return this.lastname;
  }

}
