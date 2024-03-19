import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise21',
  templateUrl: './practise21.component.html',
  styleUrls: ['./practise21.component.css']
})
export class Practise21Component  {

  array = [
    { "id": 1, "name": "Mike" },
    { "id": 2, "name": "Dave" },
    { "id": 3, "name": "Mark" }
]
replace()
{
  this.array= [
    { "id": 1, "name": "Mike" },
    { "id": 2, "name": "Dave" },
    { "id": 3, "name": "Mark" }
]
}
refresh(){
  this.array= [
    { "id": 1, "name": "Mike" },
    { "id": 2, "name": "Dave" },
    { "id": 3, "name": "Mark" },
    { "id": 4, "name": "Mark2" }
]
}

// trackby solution.

identify(index:any, item:any) {
  return item.id;
}  


}
 

