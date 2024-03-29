import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ChatbotComponent } from '../chatbot/chatbot.component';

const routes: Routes = [

  { path:'', component:ClientComponent, children:[
  { path: 'requestLoan', loadChildren: () => import('../request-loan/request-loan.module').then(m => m.RequestLoanModule) },
  { path: 'forum', loadChildren: () => import('../forum/forum.module').then(m => m.ForumModule) },
  { path: 'investment', loadChildren: () => import('../investment/investment.module').then(m => m.InvestmentModule) },
  { path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
  { path: 'payment', loadChildren: () => import('../payment/payment.module').then(m => m.PaymentModule) },
  { path: 'product', loadChildren: () => import('../products/products.module').then(m => m.ProductsModule) },
  { path: 'chatbot',component :ChatbotComponent },
 
]}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
