import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CustomersService } from '../services/customers.service';
import { Router } from '@angular/router';
import { customerData } from '../models/customers';

@Component({
  selector: 'app-dd-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit{

  customerForm!: FormGroup;
  formData!: customerData;

  constructor(private customerService:CustomersService, private router:Router, private formBuilder:FormBuilder){}

  ngOnInit(): void {
      this.customerForm = this.formBuilder.group({
        firstname:[''],
        lastname:[''],
        email:[''],
        age:[''],
        gender:[''],
        status:['']
      });
  }



  onSubmit() {
    console.log(this.customerForm.value);
    this.customerService.addCustomer(this.customerForm.value).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigate(['/home']);
      }
    );
  }
  
}
