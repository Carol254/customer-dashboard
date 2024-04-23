import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomersService } from '../services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dd-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent {

  constructor(private customerService:CustomersService, private router:Router){}

  customerForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl('')
  });


  onSubmit() {

    console.log(this.customerForm.value);
    
    this.customerService.addCustomer(this.customerForm.value).subscribe({
      next: (res) => {
        console.log(res);
        window.alert('Record added successfully');
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.router.navigate(['/home']);
      }
    });
  }
  
}
