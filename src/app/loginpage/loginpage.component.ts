import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor() { }
  username?:string;
  pwd?:string;

  ngOnInit(): void {
  }
  dologin()
  {
    console.log(this.username);
    console.log(this.username);
    console.log(this.username);

  }

}



