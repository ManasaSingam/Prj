import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './homepage/homepage.component';
import {SignupComponent  } from './signup/signup.component';
import {DashboardComponent  } from './dashboard/dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { PassengerComponent } from './passenger/passenger.component';
import { SeatingComponent } from './seating/seating.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [{path:'',redirectTo:'/homepage',pathMatch:'full'},
{path:'homepage',component:HomePageComponent},
{path:'signup',component:SignupComponent},
{path:'booking',component:BookingComponent},
{path:'dashboard',component:DashboardComponent},
{path:'ticketdetails',component:TicketdetailsComponent},
{path:'seating',component:SeatingComponent},
{path:'passenger',component:PassengerComponent},
{path:'payment',component:PaymentComponent},
{path:'loginpage',component:LoginpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
