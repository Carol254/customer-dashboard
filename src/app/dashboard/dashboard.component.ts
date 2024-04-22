import { customerData } from './../models/customers';
import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{

  constructor(private customerService:CustomersService, private router:Router, private route:ActivatedRoute){}

  title = 'customer-dashboard';
  customerList:any[] =[];
  errMsg = '';
  customerId!: any;

  ngOnInit(){
    const button = document.querySelector('#sidebar-toggle');
    const wrapper = document.querySelector('#wrapper');
    const elements: NodeListOf<Element> = document.querySelectorAll('.side-nav-item');

    if (button && wrapper) {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.toggle('toggled');
       elements.forEach((el)=>{
        el.classList.toggle('toggled');
       });

      });
    }

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

  editCustomer(c_id:number){
   this.router.navigate(["/edit-customer",{id:c_id}]);
  }

  deleteCustomer(c_id: number) {
    this.customerService.deleteCustomer(c_id).subscribe((res)=>{
      if (res.success) { 
        window.alert('Deleted successfully');
      } else {
        console.error('Deletion failed:', res);
      }
    });
  }
  
}
