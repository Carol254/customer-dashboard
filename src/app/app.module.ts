import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';

const appRoutes:Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path: 'home', component:DashboardComponent},
  {path:'edit-customer',component:EditCustomersComponent},
  {path:'add-customer',component:AddCustomersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditCustomersComponent,
    DeleteCustomerComponent,
    AddCustomersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide:APP_BASE_HREF,useValue:'/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
