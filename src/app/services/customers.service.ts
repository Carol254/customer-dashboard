import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerData } from '../models/customers';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private http: HttpClient) { 

  }

  getCutomers():Observable<customerData[]>{
    return this.http.get<customerData[]>('http://localhost/customer/list.php');
  }

}
