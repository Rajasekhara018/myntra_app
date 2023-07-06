import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CategoryData, DataserviceService } from '../services/dataservice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  siteData = new Array<CategoryData>(); // toolbar data


  constructor(private router: Router,
    public dservice: DataserviceService,
    public dialog: MatDialog) {

  }

  ngOnInit() {

    let t = localStorage.getItem('updatedData');
    if (t) {
      this.siteData = JSON.parse(t);
      this.siteData?.forEach(ele =>{
        if(ele?.iswl){
          this.dservice.wlCount += 1;
        }
      })
    } else {
      this.dservice.getData().subscribe(data => {
        console.log(data);
        this.siteData = data;
      });
    }

  }
  goToLanding() {
    this.router.navigate(['/landing']);
  }
  onsearch1(value: string) {
    this.dservice.onsearch(value, this.siteData)
  }

  showWishList() {
    this.router.navigate(['wishlist']);
  }
  showCart() {
    this.router.navigate(['cart']);
  }
  logout() {
    this.dservice.isUserLoggedIn = false;
    this.siteData.length = 0;
  }

}



