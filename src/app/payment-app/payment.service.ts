import { Injectable } from '@angular/core';
import { IPayment } from './IPayment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PaymentService {
    private _paymentListUrl = 'api/payment/paymentsList.json';

    constructor(private _http: Http){}

    getPaymentList(): Observable<IPayment[]>{
        return this._http.get(this._paymentListUrl)
            .map((response: Response)=> <IPayment[]>response.json())
            .do(data => console.log("All Payment Json :"+ JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error')
    }
}
