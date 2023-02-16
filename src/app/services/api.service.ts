import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http' 
import{Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  getData():Observable<any>{ 
    return this.http.get("https://randomuser.me/api/?results=5")
  };
}
