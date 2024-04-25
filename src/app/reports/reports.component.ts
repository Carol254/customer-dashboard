import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { ActivatedRoute } from '@angular/router';
import { customerData } from '../models/customers';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  formData!: customerData;

  constructor(private customerService:CustomersService,private route:ActivatedRoute){}

  ngOnInit(): void {
      this.getFormData();
  }


  getFormData(){
    const customerId = this.route.snapshot.paramMap.get('id');
    this.customerService.editCustomer(customerId).subscribe(
      data =>{
        console.log('from edit',data);
        this.formData = data;
        
      }
    );
  }
}
