import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../services/customers.service';
import { customerData } from '../models/customers';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.css']
})
export class EditCustomersComponent implements OnInit{

  customerForm!: FormGroup;
  formData: any;

  constructor(private route:ActivatedRoute ,private customerService:CustomersService, private formBuilder:FormBuilder ){}

  ngOnInit(): void {

    this.customerForm = this.formBuilder.group({
      id:[],
      firstname:[''],
      lastname:[''],
      email:[''],
      age:[''],
      gender:[''],
      status:['']
    });

    this.getFormData();
    
  }

  getFormData(){
    const customerId = this.route.snapshot.paramMap.get('id');
    this.customerService.editCustomer(customerId).subscribe(
      data =>{
        console.log('from edit',data);
        
        this.formData = data;
        this.populateForm(); 
      }
    );
  }

  populateForm() {
    this.customerForm.patchValue(this.formData);
  }


}
