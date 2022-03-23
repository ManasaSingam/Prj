import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/Models/booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private router:Router) {

   }
  ngOnInit(): void {
   
  }
  booking:any;
  tobook()
  {
    console.log(this.booking);
    this.router.navigate(['/payment']);

  }
  
}
