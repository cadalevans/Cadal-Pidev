import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestLoanComponent } from './request-loan/request-loan.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CathegoryProductComponent } from './cathegory-product/cathegory-product.component';
import { ForumComponent } from './forum/forum.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestLoanComponent,
  
   ProductsComponent,
   NavbarComponent,
   CathegoryProductComponent,
   ForumComponent,
   ChatbotComponent,
   PaymentComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
