import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [

  { path:'', component:AdminComponent, children:[
  { path: 'requestLoan', loadChildren: () => import('../request-loan/request-loan.module').then(m => m.RequestLoanModule) },
  { path: 'forum', loadChildren: () => import('../forum/forum.module').then(m => m.ForumModule) },
  { path: 'investment', loadChildren: () => import('../investment/investment.module').then(m => m.InvestmentModule) },
  { path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
  { path: 'payment', loadChildren: () => import('../payment/payment.module').then(m => m.PaymentModule) },
 
]}, 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
