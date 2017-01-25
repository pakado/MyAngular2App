import { Component, OnInit } from '@angular/core';
import { PaymentListComponent } from './payment-list/payment-list.component';

@Component({
  selector: 'app-payment-app',
  template: `
    <div>payment-app works!</div>
    <hr>
    <app-payment-list></app-payment-list>
  `,
  styleUrls: ['./payment-app.component.css']
})
export class PaymentAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("INIT -> PaymentAppComponent");
  }

}
