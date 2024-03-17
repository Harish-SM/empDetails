import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {


  private _baseUrl = "http://localhost:3000/"

  constructor( private _http : HttpClient) { }

    
  // getEmployees(): Observable<any>{
  //   return this._baseUrl.get<any>(`http://localhost:3000/`)
  // }

  registerEmpDetails(data:any){
    return this._http.post(`${this._baseUrl}employees`, data)
  }
    
  showEmpDetails(){
    return this._http.get(`${this._baseUrl}employees`)
  }


}
