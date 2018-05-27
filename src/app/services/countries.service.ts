import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';//http=>to hit server, Response=>response in of Response type
import 'rxjs/Rx';//map,catch,throw function are available in this package
import { Observable } from 'rxjs/Observable';//Observable=> To throw the error

@Injectable()
export class CountriesService {
  //create instance to http,technically called dependency injection
  constructor(private _http:Http) {

   }
   public getCountries():any{
     return this._http.get("https://restcountries.eu/rest/v2/all")
     //catching positive response
    .map((res:Response)=>{
      return res.json();
      //catching error response with user defined function handleError
    }).catch(this._handleError);
   }
   public _handleError(error){
     console.log("Error raised" +error);
     //throwing error response with the help of predefined Observable function
     return Observable.throw(error || "Internal server error");
   }
}
