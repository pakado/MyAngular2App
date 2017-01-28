import { Component, OnInit } from '@angular/core';
import { IPayment } from '../IPayment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  private paymentList: IPayment[];
  errorMessage: string;
  constructor(private _paymentService: PaymentService) { }

  ngOnInit() {
    console.log("INIT -> PaymentListComponent");
    this._paymentService.getPaymentList()
      .subscribe(
        paymentList => this.paymentList = paymentList,
        error => this.errorMessage = <any>error
      )
  }

}
