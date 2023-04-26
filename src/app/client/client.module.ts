import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
  
  
    
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ]
})
export class ClientModule { }
