import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryData, DataserviceService } from '../services/dataservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  iswl:boolean;
  wishlist = new Array<CategoryData>();
  addCart=new Array<CategoryData>();
  isType = false;
  constructor(public dservice: DataserviceService, private snackbar: MatSnackBar) {
  }

ngOnInit(): void {

  this.loadFavorites();
  const lu =localStorage.getItem('isLoggedIn');
   this.dservice.isUserLoggedIn = JSON.parse(lu);
}

loadFavorites() {
  this.dservice.wlCount=0;
  this.dservice.wlJson = new Array<CategoryData>();
  let t = localStorage.getItem('updatedData');
  let ls = new Array<CategoryData>();
  ls = t != null ? JSON.parse(t) : '';
  for (let i = 0; i <= ls.length; i++) {

    let element = ls[i];
    if (element?.iswl){
      this.dservice.wlJson.push(element);
      this.dservice.wlCount++;
    }
  }

}
removeWishList(data: CategoryData) {
  let t = localStorage.getItem('updatedData');
  let ls = new Array<CategoryData>();
  ls = t != null ? JSON.parse(t) : '';
  for (let i = 0; i < ls.length; i++) {
    let element = ls[i];
    if (data.id == element.id) {
      element.iswl = false;
      this.dservice.wlCount--;
      this.snackbar.open('Removed from wishlist', 'Close', {
        duration: 2000,
      });
    }
  }
  localStorage.setItem('updatedData', JSON.stringify(ls));
  this.loadFavorites();
}




  addTocart(name: CategoryData) {
    if (name) {
      this.dservice.cartJson.push(name);
      this.dservice.cartCount ++;
      this.snackbar.open('Item Added to Cart', 'Dismiss', {duration: 3000})
    }
  }
}
