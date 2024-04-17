import { Component, OnInit } from '@angular/core';
import { CustomersService } from './services/customers.service';
import { customerData } from './models/customers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'customer-dashboard';
  private customerList:customerData[] = [];

  constructor(private cutomerService:CustomersService){}

  
  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList(){
      this.cutomerService.getCutomers().subscribe(res => {
        console.log('Response status:', res.status);
        console.log('Body:', res.body);
      });
  }
}
