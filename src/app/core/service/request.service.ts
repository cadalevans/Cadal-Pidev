import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { loan } from '../model/loan';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  adminhttpOptions:any;
  /*constructor(private httpClient: HttpClient ) {headers: new HttpHeaders({'Authorization':"Bearer"+"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpZW0yMiIsImlhdCI6MTY4MjM0NzY1MCwiZXhwIjoxNjgyNDM0MDUwfQ.6TMPzst_zAdf9Zoub2U3a5sCmN7fd0JAcC3oT7HQ_ilJA3DkSy-CcYTGYTiHA49lzHXkvbP0oHD321QFQDCrsA"})};*/
  constructor(private httpClient: HttpClient){
    this.adminhttpOptions ={ 
      headers: new HttpHeaders({
      'Authorization': "Bearer "+"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpZW0yMiIsImlhdCI6MTY4MjM0NzY1MCwiZXhwIjoxNjgyNDM0MDUwfQ.6TMPzst_zAdf9Zoub2U3a5sCmN7fd0JAcC3oT7HQ_ilJA3DkSy-CcYTGYTiHA49lzHXkvbP0oHD321QFQDCrsA"})
     
      };
  }
  public addRequest(request:any){
    return this.httpClient.post("http://localhost:8081/RequestLoan/add/1",request,{responseType:'text'as'json'})
  }
  public getAllRequests(){
    return this.httpClient.get("http://localhost:8081/RequestLoan/all",this.adminhttpOptions)
  }
  public getAllLoans(){
    return this.httpClient.get("http://localhost:8081/Loan/all",this.adminhttpOptions)
  }
}
