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

  getCutomers(){
    //  return this.http.get<customerData>('http://localhost:8081/list.php');
    return this.http.get<customerData>('http://localhost/customer/list.php', {observe: 'response',headers: {
      'accept': 'application/json',
    }});

  }

}
