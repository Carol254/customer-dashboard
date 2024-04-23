import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../services/customers.service';
import { customerData } from '../models/customers';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.css']
})
export class EditCustomersComponent implements OnInit{

  constructor(private route:ActivatedRoute ,private customerService:CustomersService, private formBuilder:FormBuilder ){}

  customerDetails!: customerData;

  ngOnInit(): void {
    const customerId = this.route.snapshot.paramMap.get('id');

    this.customerService.editCustomer(customerId).subscribe({
      next:(res)=>{
  
      }
    });
  }



}
