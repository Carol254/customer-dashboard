import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { customerData } from '../models/customers';
import { Response } from '../models/response';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private http: HttpClient) { 

  }

  // Step 1
  httpHeaders: HttpHeaders = new HttpHeaders({
    Accept:'application/json'
  });

  getCustomers():Observable<customerData[]>{
    return this.http.get<customerData[]>('http://localhost/customer/list.php');
  }

  editCustomer(id:any):Observable<customerData>{
    return this.http.get<customerData>(`http://localhost/customer/edit.php?id=${id}`);
  }

  updateCustomer(custDetails:customerData):Observable<customerData>{
    return this.http.post<customerData>('http://localhost/customer/update.php',custDetails);
  }

  deleteCustomer(id: any): Observable<any> {
    const params = new HttpParams().set('id',id);
    return this.http.delete<customerData[]>('http://localhost/customer/delete.php',{params:params});
  }

  addCustomer(custData:any):Observable<Response>{
    return this.http.post<Response>('http://localhost/customer/add.php',custData,{headers:this.httpHeaders});
  }

}
