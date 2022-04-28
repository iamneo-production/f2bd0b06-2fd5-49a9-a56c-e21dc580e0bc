import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerUser } from './customer-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private _http : HttpClient) { }


  public customerUserFromRemote(customeruser: CustomerUser):Observable<any>{
    return this._http.post<any>("http://localhost:8080/customeruser",customeruser)
    }
    // handleError(error: Response){

    // }
}