import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



export class Hero {

  constructor(
    public id: number,
    public dob: Date,
    public name: string,
    public power: string,
    public clss: string,
    public alterEgo?: string
  ) {  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  headers = ["id","name","dob","class","power","gender"];


  rows =[
   {"id":"1",
      "name":"jafeen",
      "dob" :"26",
      "class":"2",
      "power":"c",
      "gender":"male"
},
      {"id":"12",
      "name":"moh",
      "dob" :"23",
      "class":"3",
      "power":"a",
      "gender":"female"}
];
  
  constructor() {}
  classes = ['1', '2','3','4','5','6','7','8','9','10','11','12'];

  powers = ['A','B','C'];
   
 
  model = new Hero(18, new Date(), 'jafeen', this.classes[1], this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit(val: any) { console.log(val.value); this.submitted = true; }

  

}
 


 