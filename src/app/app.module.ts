import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { HomePageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/services/user.services';
import { BookingComponent } from './booking/booking.component';
import { PassengerComponent } from './passenger/passenger.component';
import { BusdetailsComponent } from './busdetails/busdetails.component';
import { PaymentComponent } from './payment/payment.component';
import { SeatingComponent } from './seating/seating.component';
import { TicketCancellationComponent } from './ticket-cancellation/ticket-cancellation.component';
import { HomePageService } from 'src/services/homepage.services';

@NgModule({
  declarations: [
    AppComponent,
    TicketdetailsComponent,
    HomePageComponent,
    DashboardComponent,
    SignupComponent,
    LoginpageComponent,
    BookingComponent,
    PassengerComponent,
    BusdetailsComponent,
    PaymentComponent,
    SeatingComponent,
    TicketCancellationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [UserService,HomePageService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
