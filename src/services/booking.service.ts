import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Booking } from "src/Models/booking.model";

@Injectable()
export class BookingService{
    
    constructor(private http:HttpClient)
    {
        
    }

   readonly uri="http://localhost:13533/api/BusSearch";

    togetdata()
    {
        debugger;
        return this.http.get(this.uri);
        
        
    }
}
