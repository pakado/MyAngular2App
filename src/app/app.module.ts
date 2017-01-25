import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaymentAppComponent } from './payment-app/payment-app.component';
import { PaymentListComponent } from './payment-app/payment-list/payment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentAppComponent,
    PaymentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
