import { Component, OnInit } from '@angular/core';
import { PaymentAppComponent } from './payment-app/payment-app.component';

@Component({
  selector: 'app-root',
  template: `
    <div>{{title}}</div>
    <app-payment-app></app-payment-app>  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app works! test';

  ngOnInit(): void{
    console.log("INIT -> AppComponent");
  }
}
