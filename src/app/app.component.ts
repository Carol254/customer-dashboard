import { Component, OnInit, afterNextRender } from '@angular/core';
import { CustomersService } from './services/customers.service';
import { customerData } from './models/customers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'customer-dashboard';
  customerList:any[] =[];
  errMsg = '';

  // cus;
  constructor(private cutomerService:CustomersService){}

  
  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList() {
    this.cutomerService.getCutomers().subscribe({
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
