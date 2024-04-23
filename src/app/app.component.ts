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
  }




}
