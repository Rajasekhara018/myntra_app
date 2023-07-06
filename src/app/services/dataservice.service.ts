import { getLocaleDateFormat } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  jsonURL = './assets/site-data.json';

  wlCount :number = 0;
  cartCount:number = 0;
  searchText = "";
  notFound: boolean; // error msg
  isUserLoggedIn: boolean; //for login to logout functionality
  uniqueId: any; // for search function

  searchPipe = new Array<any>(); // for search
  wlJson = new Array<CategoryData>();// wishliistdata from json
  cartJson = new Array<CategoryData>();//cart data from json
  resJson = new Array<CategoryData>(); //  json data
  searchArray = new Array<CategoryData>();// landing data


  constructor(private http: HttpClient, private snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute) {
  }

  getData(): Observable<any[]> {
    let resJson = this.http.get<any[]>(this.jsonURL);
    resJson.subscribe(data => {
      this.resJson = data;  // res array stored in data// get (data) from json
    });
    return resJson;

  }

  onsearch(value: string, data: Array<CategoryData>) {
    let val = value.toLowerCase();
    this.searchArray = this.resJson.filter(element => {
      if (this.uniqueId) {
        return ((element.name.toLowerCase().indexOf(val) >= 0 && element.subcategory == 'tshirts') || (element.description.toLowerCase().indexOf(val) >= 0 && element.subcategory == 'tshirts'));
      } else {
        return (element.name.toLowerCase().indexOf(val) >= 0 || element.description.toLowerCase().indexOf(val) >= 0 || element.category.toLowerCase().indexOf(val) >= 0);
      }
    })
  }




  loginFunction(loginform: LoginObj) {
    let l = JSON.parse(localStorage.getItem('data')!);
    // console.log(l.email);
    if (l?.length > 0) {
      l.forEach((element: any) => {

        if (element.email === loginform.email && element.password === loginform.password) {

          localStorage.setItem('loggedInUser', JSON.stringify(loginform));
          localStorage.setItem('isLoggedIn', JSON.stringify(true));
          localStorage.setItem('toolbar1', 'true');
          this.snackBar.open("Logged In successfully", 'Dismiss', { duration: 3000 })

        }
        else {
          this.snackBar.open("invalid Credentials", 'Dismiss', { duration: 3000 })
        }
      });
    }
  }
}



export class CategoryData {
  iscl: boolean;
  iswl: boolean;
  id: number;
  orderid:string;
  quantity: number;
  category: string;
  subcategory: string;
  name : string;
  description:  string;
  amount: number;
  qtyAmount: number;
  imgurl: string;
}


export class LoginObj {
  name: string;
  mobilenumber: number;
  pincode: number;
  address: string;
  Locality: string;
  email: string;
  password: string;
  confirmpassword: string;
  gender: string;
  size: string;
  color: string;
  quantity: number;
  cardnumber:string;
  upinumber : string;
  username: string;
  cvvnumber: number;
  validthru: string;
  username1: string;
  password1: string;
  mobilenumber1: string;

}

















