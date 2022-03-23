import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class UserService
{
    constructor(private http:HttpClient)
    {

    }

    readonly uri= "http://localhost:24876/api/Signup"
    

    getuser()
    {
        return this.http.get(this.uri)
    }

    //post

    insertuser(user:any)
    {
        debugger;
        return this.http.post(this.uri,user,{responseType :'text'});
    }

    //delete


}
    
