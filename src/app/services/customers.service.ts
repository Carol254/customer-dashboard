import { HttpClient, HttpEvent, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { customerData } from '../models/customers';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private http: HttpClient) { 

  }

  getCustomers():Observable<customerData[]>{
    return this.http.get<customerData[]>('http://localhost/customer/list.php');
  }

  editCustomer(id:number):Observable<customerData[]>{
    return this.http.get<customerData[]>('http://localhost/customer/edit.php');
  }

  deleteCustomer(id: any): Observable<any> {
    const params = new HttpParams().set('id',id);
    return this.http.delete<customerData[]>('http://localhost/customer/delete.php',{params:params});
  }

}
