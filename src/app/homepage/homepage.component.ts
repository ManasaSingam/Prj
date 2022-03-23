import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/services/homepage.services';
import { Router } from '@angular/router';
import { Booking } from 'src/Models/booking.model';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {
  searchbus: any={};
 // Departure: string;
 // Destination: string;
 

  constructor(private homeservice:HomePageService,private router:Router) {
  //  this.Departure="";
   // this.Destination="";
    

   }
    

  ngOnInit(): void {
    this.fetchBus();
  }

 businfo:any;
 fetchBus()
 {
   debugger;
   this.homeservice.getBus().subscribe((data:any)=>{this.businfo=data;console.table(this.businfo)});
 }
 bus:any;
  doclick()
  {
    debugger;
   this.homeservice.bussearch(this.searchbus).subscribe((data:any)=>{this.bus=data;console.table(this.searchbus)});
    console.log(this.bus);
    this.router.navigate(['/seating']);

  

  }
}