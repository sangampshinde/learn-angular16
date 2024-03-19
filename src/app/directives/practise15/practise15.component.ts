import { Component } from '@angular/core';

@Component({
  selector: 'app-practise15',
  templateUrl: './practise15.component.html',
  styleUrls: ['./practise15.component.css']
})
export class Practise15Component {

  cssVar:string='primary big';

  cssArry=['primary','big'];

  cssObj={
    
    primary:true,
    big:true
  };


}
