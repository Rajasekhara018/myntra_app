import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processpay',
  templateUrl: './processpay.component.html',
  styleUrls: ['./processpay.component.scss']
})
export class ProcesspayComponent implements OnInit {
  ta: string;//total amount
  paymentformData: string;
  PData: any;
  invoiceno = 65346
  Actioncode= 10
  Rtrieval = 23748559600
  updatedData: string;
  OrderId: any;

  date = new Date;
  RandId = Math.trunc(Math.random()*10000000)

  oredrId = "MY1234518"

  constructor(public router:Router) { }

  ngOnInit(): void {
    this.OrderId = JSON.parse(localStorage.getItem('updatedData'))

    this.PData = JSON.parse(localStorage.getItem('paymentformData'))
    // console.log(this.PData);
    //  this.paymentformData = PData != null ? JSON.parse(PData) : '';
    let t = localStorage.getItem('ta');
    this.ta = t != null ? JSON.parse(t) : '';


  }
  back(){
    this.router.navigate(["payment"])
  }

}
