import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestLoanRoutingModule } from './request-loan-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RequestLoanRoutingModule,
    FormsModule
  ]
})
export class RequestLoanModule { }
