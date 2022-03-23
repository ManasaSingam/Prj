import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.css']
})
export class SeatingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 
  docontinue()
  {
   
    this.router.navigate(['/passenger']);
  }

}


