import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './truncate';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportsComponent } from './reports/reports.component';
import { ClientsComponent } from './clients/clients.component';
import { SupportComponent } from './support/support.component';
import { SettingsComponent } from './settings/settings.component';

const appRoutes:Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path: 'home', component:DashboardComponent},
  {path:'edit-customer',component:EditCustomersComponent},
  {path:'add-customer',component:AddCustomersComponent},
  {path:'reports',component:ReportsComponent},
  {path:'clients',component:ClientsComponent},
  {path:'support',component:SupportComponent},
  {path:'settings',component:SettingsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditCustomersComponent,
    DeleteCustomerComponent,
    AddCustomersComponent,
    TruncatePipe,
    ReportsComponent,
    ClientsComponent,
    SupportComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide:APP_BASE_HREF,useValue:'/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
