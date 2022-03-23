import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  docontinue()
  {
   
    this.router.navigate(['/booking']);
  }
 

}


