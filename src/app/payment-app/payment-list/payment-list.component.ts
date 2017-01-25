import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  private paymentList =[
    {
      "paymentId": 0,
      "paymentName": "carttest",
      "productCode": "GDN-0011",
      "howMachToPay": 100,
      "description": " Test48-inch wooden handle.",
      "date": "March 19, 2016"
    },
    {
      "paymentId": 1,
      "paymentName": "Leaf Rake",
      "productCode": "GDN-0011",
      "howMachToPay": 1000,
      "description": "Leaf rake with 48-inch wooden handle.",
      "date":  "March 19, 2016"
    },
    {
      "paymentId": 2,
      "paymentName": "Garden Cart",
      "productCode": "GDN-0023",
      "howMachToPay": 200,
      "description": "15 gallon capacity rolling garden cart",
      "date": "March 18, 2016"
    },
    {
      "paymentId": 5,
      "paymentName": "Hammer",
      "productCode": "TBX-0048",
      "howMachToPay": 333,
      "description": "Curved claw steel hammer",
      "date": "May 21, 2016"
    },
    {
      "paymentId": 8,
      "paymentName": "Saw",
      "productCode": "TBX-0022",
      "howMachToPay": 444,
      "description": "15-inch steel blade hand saw",
      "date": "May 15, 2016"
    },
    {
      "paymentId": 10,
      "paymentName": "Video Game Controller",
      "productCode": "GMG-0042",
      "howMachToPay": 666,
      "description": "Standard two-button video game controller",
      "date": "October 15, 2015"
    }
  ]


  constructor() { }

  ngOnInit() {
    console.log("INIT -> PaymentListComponent");
  }

}
