import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{

  errMsg = '';
  customerId!: any;
  customerList:any[] =[];

  constructor(private customerService:CustomersService){}

  ngOnInit(): void {
      this.getCustomerList();
  }

  getCustomerList() {
    this.customerService.getCustomers().subscribe({
        next: (data: any[]) => { 

          if(data.length > 0){
            console.log(data);
            for (let i = 0; i < data.length; i++) {
              console.log(data[i]);
            }
            this.customerList = data;

          } else{
            this.errMsg = "no results found!";
          }

        }
    });
  }

}
