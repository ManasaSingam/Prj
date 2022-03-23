import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";



@Injectable()
export class HomePageService
{
    constructor(private http:HttpClient)
    {

    }
    //.net core prjwebapi url
    readonly uri="http://localhost:6869/api/BusSearch"
    getBus()
    {
        debugger;
        return this.http.get(this.uri);
    }
    //post
    bussearch(bus:any)
    {
        debugger;
        return this.http.post(this.uri,bus);
    }
}

