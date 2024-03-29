import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { RequestLoanComponent } from './request-loan.component';

const routes: Routes = [{ path : '', component:RequestLoanComponent, children:[
  { path: 'list', component: ListComponent },
  { path: 'form', component: FormComponent }
  
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestLoanRoutingModule { }
