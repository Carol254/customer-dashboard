import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{

  constructor(private customerService:CustomersService){}

  title = 'customer-dashboard';
  customerList:any[] =[];
  errMsg = '';

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
    this.customerService.getCutomers().subscribe({
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
