import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private _http:HttpClient) { }


  getAllUsers() {
    return  this._http.get<any>("http://localhost:3000/users").pipe(map((res:any)=>{
      return res;
    }))
  }
}
