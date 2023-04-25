import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestLoanComponent } from './request-loan/request-loan.component';
import { ProductsComponent } from './products/products.component';
//lazy loading 
const routes: Routes = [
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{ path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
