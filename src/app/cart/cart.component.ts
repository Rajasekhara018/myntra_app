import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryData, DataserviceService } from '../services/dataservice.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  offerpercent = [{ "cardname": "ICICI Card Users", "offeramount": 100 }, { "cardname": "HDFC Card Users", "offeramount": 200 }, { "cardname": "KOTAK Card Users", "offeramount": 300 }];

  displayedColumns: string[] = ['remove','image', 'price', 'qty', 'name','orderid','description', 'size'];
  favoriteOffer: number;
  // ps: string;
  datasource = CategoryData;
  totalPrice: any;
  selected = 'any';// select option
  checked = false;//check box
  cartData: CategoryData;
  isType = false;
  cartItems: any;
  cartForm: any;
  cartTotal = 0;
  siteData = new Array<CategoryData>();
  searchArray = new Array<CategoryData>();
  addCart = new Array<CategoryData>(); // for cart component


  cartarray = new Array<CategoryData>();//localstorage
  quantitydata = [1, 2, 3, 4, 5];
  cartLocalData: any;
  quantity = 1;
  quantityTotalAmount = Array<any>();
  totalPrice1 = 0;
  amount: number;


  constructor(public dservice: DataserviceService, private snackbar: MatSnackBar) {
  }
  storelocal(formvalue: CategoryData) {
    this.cartarray.push(formvalue);
    localStorage.setItem('cartDetails', JSON.stringify(this.cartarray));
    this.cartLocalData = JSON.parse(localStorage.getItem('cartDetails'));
  }

  ngOnInit() {
    this.addCart = this.dservice.cartJson;

    this.addCart.forEach(element => {
      this.cartTotal += (element.quantity * element.amount)
      element.quantity = 1;
      this.siteData = new Array<CategoryData>();
      this.dservice.notFound = false;
      this.loadData();

    });
    this.cartData = new CategoryData();

  }

  loadData() {
    this.dservice.getData().subscribe(data => {

      this.dservice.searchArray = data;
    });

  }

  removeItem(index: number) {

    for (let i = 0; i <= this.addCart.length; i += 1) {
      if (index == +i) {
        this.addCart.splice(index, 1);
        this.dservice.cartCount--;
        this.snackbar.open("Removed Item from cart", "Close", { duration: 2000 });
      }

    }
    this.addCart = [...this.addCart];
    this.updateQuantity(index);
  }

  updateQuantity(index: number) {
    this.cartTotal = 0;
    for (let i = 0; i <= this.addCart.length; i++) {
      let element = this.addCart[i];
      this.cartTotal += (element.amount * element.quantity);


    }
  }


  goToPaymentPage(){
    localStorage.setItem('ta', JSON.stringify(this.cartTotal));
  }
}
