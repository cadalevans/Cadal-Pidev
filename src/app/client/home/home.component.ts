import { Component } from '@angular/core';
import { request } from 'src/app/core/model/request';
import { RequestService } from 'src/app/core/service/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  message:any;
  
  request={ amountRequired:0,
    term_loan:0,
    income:0,
    curCredits:false}
  constructor(private service:RequestService){}
  ngOnInit():void{
    this.request=new request();
  }
  
  public addRequestnow(){
    this.request.curCredits=false;
  
  
    this.service.addRequest(this.request).subscribe(()=>console.log("here"));
  }
}
