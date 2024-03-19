import { Component } from '@angular/core';

@Component({
  selector: 'app-change-event',
  templateUrl: './change-event.component.html',
  styleUrls: ['./change-event.component.css']
})
export class ChangeEventComponent {

  // nameC:any=''
  // nameC1:any=''
  // name1Changed(arg:any) {
  //   this.nameC=("name1Changed " + arg.target.value);
  //   this.nameC1=(arg);
  //  }
  // countryChanged(){

  // }
  // countries:[]=[]

  name1Changed(arg:any) {
    console.log("name1Changed " + arg.target.value);
    console.log(arg);
   }
    
   country1Changed(arg:any) {
     console.log("country1Changed " + arg.target.value);
     console.log(arg);
   }

   countries:[]=[];

}
