import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryData, DataserviceService } from '../services/dataservice.service';
@Component({
  selector: 'app-flipflops',
  templateUrl: './flipflops.component.html',
  styleUrls: ['./flipflops.component.scss']
})
export class FlipflopsComponent implements OnInit {



  siteData = new Array<CategoryData>();
  constructor(public dservice: DataserviceService,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {

    this.dservice.getData().subscribe(data=>{
      this.siteData=data;
      console.log(data)
    });
    this.filterCategory(this.siteData)
  }
  // addToWishList(data:CategoryData){

  //   this.dservice.wlJson.push(data);
  //   this.dservice.wlCount++;
  //   this.snackbar.open("addtwishlist","Dismiss",{duration:3000})
  // }
  addTocart(name: CategoryData) {
    if (name) {
      this.dservice.cartJson.push(name);
      this.dservice.cartCount ++;
      this.snackbar.open('Item Added to Cart', 'Dismiss', {duration: 3000})
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


  filterCategory(cat:CategoryData[]):CategoryData[]{

return this.siteData.filter(p =>p.subcategory=='flipflops');
console.log(this.siteData)


  }

}
