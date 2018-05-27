import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {

  constructor(private _http:Http) {

   }
   public getCountries():any{
     return this._http.get("https://www.w3schools.com/angular/customers.php")
    .map((res:Response)=>{
      return res.json();
    }).catch(this._handleError);
   }
   public _handleError(error){
     console.log("Error raised" +error);
     return Observable.throw(error || "Internal server error");
   }
}
