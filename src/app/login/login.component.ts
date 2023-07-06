import { Component, OnInit } from '@angular/core';
import { Form, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { DataserviceService, LoginObj } from '../services/dataservice.service';
import {Location} from '@angular/common'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  conformpassword: any;
  username = '';
  Gender = '';
  useremail: string;
  userpassword: string;
  hide = true;
 tabIndex:number=0;
  loginObj: LoginObj;


  regUsers: Array<LoginObj> = new Array<LoginObj>();

  constructor(public dservice: DataserviceService,private _snackBar: MatSnackBar, private router: Router,private location:Location) { }
  ngOnInit(): void {

    localStorage.removeItem('toolbar1');
    this.loginObj = new LoginObj();

  }

  signUpUser(formvalue: LoginObj) {
    this.regUsers.push(formvalue);
    localStorage.setItem('data', JSON.stringify(this.regUsers));
    this._snackBar.open("Sucessfully registered", 'Done', { duration: 3000 })
    this.tabIndex=this.tabIndex+1;
  }

  callLoginService(loginform: LoginObj) {
    this.location.back();
    this.dservice.isUserLoggedIn=true;
this.dservice.loginFunction(loginform);
  }



  myFunction1(loginform1: any) {

    let v = JSON.parse(localStorage.getItem('data')!);
    console.log(v.email);
    if (v?.length > 0) {
      v.forEach((element: any) => {
        if (element.email === this.useremail && element.password === this.userpassword) {

          localStorage.setItem('loggedInUser', JSON.stringify(loginform1));
          localStorage.setItem('toolbar1','true');
          this._snackBar.open("valid Credentials", 'Dismiss', { duration: 3000 })
          this.router.navigate(['/landing']);
        }
        else {
          this._snackBar.open("invalid Credentials", 'Dismiss', { duration: 3000 })
        }

      });

    }

  }
}
