import { Component, OnInit } from '@angular/core';
import { CategoryData, DataserviceService } from '../services/dataservice.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { style } from '@angular/animations';
import { reduce } from 'rxjs';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  siteData = new Array<CategoryData>(); // for searching
  searchArray = new Array<CategoryData>();

 constructor(public dservice: DataserviceService, public dialog: MatDialog, private router: Router,

  private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    let t = localStorage.getItem('updatedData');
    if (t) {
      this.dservice.searchArray = JSON.parse(t);
    } else {
      this.loadData();
    }
  }
  loadData() {
    this.dservice.getData().subscribe((data) => {
      this.dservice.searchArray = data;
    });
    for (let i = 0; i <= this.dservice.searchArray.length; i++) {
      let element = this.dservice.searchArray[i];
      if (element.iswl) {
        this.dservice.wlCount++;
      }
    }
  }

  addToWishlist(data: CategoryData) {
    for (let i = 0; i <= this.dservice.searchArray.length; i++) {
      let element = this.dservice.searchArray[i];
      if (element.id == data.id) {
        element.iswl = true;
        this.dservice.wlCount++;
        this.snackbar.open('Added to wishlist', 'Close', {
          duration: 2000,
        });
        break;
      }
    }

    localStorage.setItem(
      'updatedData',
      JSON.stringify(this.dservice.searchArray)
    );
  }
  removeWishList(data: CategoryData) {
    if (this.dservice?.searchArray?.length > 0) {
      this.dservice?.searchArray?.forEach(ele => {
        if (ele.id === data.id) {
          ele.iswl = false;
          this.dservice.wlCount = this.dservice.wlCount - 1;
          console.log(this.dservice.wlCount);
          this.snackbar.open('Removed from wishlist', 'Close', {
            duration: 2000,
          });
        }
      })
    }
    this.dservice.searchArray = [...this.dservice.searchArray];

    localStorage.setItem('updatedData', JSON.stringify(this.dservice.searchArray)
    );
  }

  addTocart(data: CategoryData) {

    for (let i = 0; i <= this.dservice.searchArray.length; i++) {
      let element = this.dservice.searchArray[i];
      if (element.id == data.id) {
        element.iscl = true;
        this.dservice.cartJson.push(data);
        this.dservice.cartCount++;
        this.snackbar.open('Added to Cart', 'Close', {
          duration: 2000,
        });
        break;
      }

    }
    localStorage.setItem('updatedData', JSON.stringify(this.dservice.searchArray));

  }

}


  // onsearch(value: string) {
  //   if (value) {
  //     this.searchArray = this.siteData.filter(function (ele, i, array) {
  //       let arrayelement:any = ele.name.toLowerCase()
  //       return arrayelement.includes(value);
  //     })
  //     if (this.searchArray.length > 0) {
  //       this.notFound = true;
  //     }
  //   }

  // }


