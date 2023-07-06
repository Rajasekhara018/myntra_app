import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginObj } from '../services/dataservice.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.scss']
})
export class PlaceorderComponent implements OnInit {
  mobilenumber: number;
  email: string;
  password: string;
  confirmpassword: string;
  gender: string;
  size: string;
  color: string;
  quantity: number;
  useremail: string;
  userpassword: string;
  pincode: number;
  hide = true;
  checked = false;
  disabled = false;
  tabIndex: number = 0;
  addressObj: LoginObj;
  fontStyle?: string;


  regUsers: Array<LoginObj> = new Array<LoginObj>();

  dservice: any;
  constructor(private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.addressObj = new LoginObj();
  }
  fontStyleControl = new FormControl('');
  callAddaddressService(Addaddress: LoginObj) {
    this.regUsers.push(Addaddress);
    localStorage.setItem('data', JSON.stringify(this.regUsers));

    this.snackbar.open('address added successfully', 'Dismiss', { duration: 3000 })

  }



}
