import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { ActivatedRoute, Router } from '@angular/router';


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
        window.location.reload();
      } else {
        console.error('Deletion failed:', res);
      }
    });
  }

  getRecords(c_id:number){
    this.router.navigate(["/reports",{id:c_id}]);
  }
  
}
