import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProductsComponent } from '../products/products.component';
import { RequestLoanComponent } from '../request-loan/request-loan.component';


@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    ProductsComponent,
    RequestLoanComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
