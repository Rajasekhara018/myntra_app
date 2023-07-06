import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginObj } from '../services/dataservice.service';
import { CategoryData, DataserviceService } from '../services/dataservice.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SimpleSnackBar } from '@angular/material/snack-bar';
import { CdkHeaderCellDef } from '@angular/cdk/table';
import { Observable, repeatWhen, takeUntil } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  creditPay1 = [
    { "cardno": "5123456111111111", "valithru": "12/21", "cvv": 324, "imgurl": "../../assets/card-imges/mastercard-logo.jpg" },
    { "cardno": "5113456317028738", "valithru": "12/25", "cvv": 415, "imgurl": "../../assets/card-imges/mastercard-logo.jpg" },
    { "cardno": "4123653314728723", "valithru": "11/20", "cvv": 764, "imgurl": "../../assets/card-imges/visacard.jpg" },
    { "cardno": "4223653314728725", "valithru": "11/22", "cvv": 674, "imgurl": "../../assets/card-imges/visacard.jpg" },
    { "cardno": "6123653314728723", "valithru": "10/20", "cvv": 543, "imgurl": "../../assets/card-imges/Rupay-Logo.jpg" },
    { "cardno": "6323653314528724", "valithru": "10/22", "cvv": 523, "imgurl": "../../assets/card-imges/Rupay-Logo.jpg" },
    { "cardno": "3323653314528724", "valithru": "09/22", "cvv": 321, "imgurl": "../../assets/card-imges/american express-logo.jpg" },
    { "cardno": "3543653314528782", "valithru": "09/21", "cvv": 651, "imgurl": "../../assets/card-imges/american express-logo.jpg" }]

  upiPay = [{"upino": "1234567891@Okhdfc"},
            {"upino": "abc123@Okhdfc"},
            {"upino": "abcdef@Okhdfc"}]

  nbPay = [{ "username": "manasa", "pwd": "manasa@123" }]

  walletpay = [{"mobilenumber":"9347654320"},{"mobilenumber":"9347654320"}]

  resultArray = new Array();
  upiresultArray = new Array();


  date = new Date;
  hide = true;
  cardnumber: string;
  username: string;
  cvvnumber: number;
  validthru: number;
  upinumber: string;
  WalletID: string;
  mobilenumber : string

  addressObj: LoginObj;



  page0: boolean;
  page1: boolean;
  page2: boolean;
  page3: boolean;

  Netpage: boolean;
  Walletpage :boolean;

  ta: string;//total amount
  cardImg: any;


  RandId = Math.trunc(Math.random() * 10000000)
  iscardValid = false;// error msg



  regUsers: Array<LoginObj> = new Array<LoginObj>();

  constructor(private router: Router, public dservice: DataserviceService,) { }

  ngOnInit(): void {
    this.addressObj = new LoginObj();
    this.page0 = true;
    this.page1 = false;
    this.page2 = false;
    this.page3 = false;
    let t = JSON.parse(localStorage.getItem('ta'))
    // let t = localStorage.getItem('ta');
    this.ta = t != null ? JSON.parse(t) : '';

  }


  clickMessage = '';


    onClickMe(val: string) {
    this.clickMessage = val;
  }

  clickMessage1 = '';

  onClickMe1(value: string) {
    this.clickMessage1 = value;
  }

  backTOLanding(){
    this.router.navigate(["landing"])

  }

  cardFormat(value: string) {
    // if (value.startsWith('3')) {
    //   this.cardImg = './../assets/card-imges/american express-logo.jpg';
    // }
    if (value.startsWith('4')) {
      this.cardImg = '../../assets/card-imges/visa.svg';
    }
    if (value.startsWith('5')) {
      this.cardImg = '../../assets/card-imges/mastercard.svg';
    }
    if (value.startsWith('6')) {
      this.cardImg = '../../assets/card-imges/rupay.svg';
    }
  }
  checkCardno() {
    return false;
  }

  keyPressNumbers(event: any) {
    // console.log(event);
    var charCode = (event.which) ? event.which : event.keyCode;

    if ((charCode == (48 - 0) || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }


  @ViewChild('paymentform') paymentform: NgForm;

  payUsingCcDc() {
    this.page0 = false;
    this.page1 = true;
    setTimeout(() => {
      let res = this.creditPay1.filter(a => {
        if (a.cardno == this.addressObj.cardnumber && a.cvv == this.addressObj.cvvnumber && a.valithru == this.addressObj.validthru) {

          this.page1 = false;
          setTimeout(() => {
            this.page0 = false;
            this.page1 = false;
            this.page2 = true;
            this.iscardValid = false;
            this.continueToReceipt();
          })
          return true;
        } else {//invalid

          // this.paymentform.resetForm();
          this.page1 = false;
          this.page0 = true;
          this.iscardValid = true;
          return false;
        }
      })
    }, 3000)

  }



  continueToReceipt() {
    setTimeout(() => {
      this.page0 = false;
      this.page1 = false;
      this.page2 = false;
      this.router.navigate(["processpay"])
      this.paymentform.reset();
    }, 3000);
  }

  close() {
    this.router.navigate(["landing"])
  }


  payUsingUpi(upiId: string) {
    this.page0 = false;
    this.page1 = true;
    setTimeout(() => {
      let res1 = this.upiPay.filter(b => {//valid
        if (b.upino === upiId) {
          this.page1 = false;

          setTimeout(() => {
            this.page0 = false;
            this.page1 = false;
            this.page2 = true;
            this.iscardValid = false;

            this.continueToReceipt();
          })
          return true;
        } else {//invalid
          this.page1 = false;
          this.page0 = true;
          this.iscardValid = true;
          return false;
        }
      })
    }, 3000);
    console.log(this.tabIndex);
  }


  tabIndex = 0;
  clickTab(tabValue: MatTabChangeEvent) {
    this.iscardValid = false;
    this.tabIndex = tabValue.index
  }

  payUsingNetBanking() {
    this.page0 = false;
    this.page1 = true;
    setTimeout(() => {
      let npay = this.nbPay.filter(p => {
        if (p.username == this.addressObj.username1 && p.pwd == this.addressObj.password1) {
          this.page1 = false;
          setTimeout(() => {
            this.page0 = false;
            this.page1 = false;
            this.page2 = true;
            this.iscardValid = false;

            this.continueToReceipt();
          })
          return true;
        } else {//invalid
          this.page1 = false;
          this.page0 = true;
          this.iscardValid = true;
          this.addressObj.username1 = '';
          this.addressObj.password1 = '';
          return false;
        }
      })
    }, 3000);
  }
  walletpay1 = [{"mobilenumber":"9347654320"},{"mobilenumber":"9347654320"}]

  payUsingWallet(){
    this.page0 = false;
    this.page1 = true;
    setTimeout(() => {
      let wpay = this.walletpay.filter(w => {
        if(w.mobilenumber == this.addressObj.mobilenumber1){
          this.page1 = false;
          setTimeout(() => {
            this.page0 = false;
            this.page1 = false;
            this.page2 = true;
            this.iscardValid = false;

            this.continueToReceipt();
          })
          return true;
        } else {//invalid
          this.page1 = false;
          this.page0 = true;
          this.iscardValid = true;
          this.addressObj.username1 = '';
          this.addressObj.password1 = '';
          return false;
        }
      })
    }, 3000);



  }


}
