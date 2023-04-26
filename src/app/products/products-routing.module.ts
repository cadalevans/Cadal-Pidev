import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [{ path : '', component:ProductsComponent, children:[

  { path: 'form', component: FormComponent },
  { path: 'list', component: FormComponent }
  
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
