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


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getCustomers():Observable<customerData[]>{
    return this.http.get<customerData[]>('http://localhost/customer/list.php');
  }

  editCustomer(id:any):Observable<customerData>{
    return this.http.get<customerData>(`http://localhost/customer/edit.php?id=${id}`);
  }

  updateCustomer(custDetails:customerData):Observable<customerData>{
    return this.http.put<customerData>('http://localhost/customer/update.php', custDetails ,this.httpOptions );
  }

  deleteCustomer(id: any): Observable<any> {
    const params = new HttpParams().set('id',id);
    return this.http.delete<customerData[]>('http://localhost/customer/delete.php',{params:params});
  }

  addCustomer(custData:customerData):Observable<customerData>{
    return this.http.post<customerData>('http://localhost/customer/add.php',custData,this.httpOptions);
  }

}
