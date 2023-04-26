import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from '../admin/admin.component';
import { ClientComponent } from '../client/client.component';

@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
  
  ],
  imports: [
    CommonModule, 
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
