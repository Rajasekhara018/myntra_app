import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-scree1',
  templateUrl: './scree1.component.html',
  styleUrls: ['./scree1.component.scss']
})
export class Scree1Component implements OnInit {
  displayedColumns: string[] = ['Name', 'Number', 'Mobile No.', 'Status', 'Create date', 'ABC'];
  length = 10;
  pageSize = 3;
  pageIndex = 0;
  pageSizeOptions = [1, 3, 5];
  showFirstLastButtons = true;
  Statusv = ['ACTIVE', 'CLOSED', 'INACTIVE', 'NEW']
  nameSearch: any;
  mNumSearch: any;
  mobileSearch: string;
  statusSearch: any;
  count: number;
  ip = ["No merchants found for"];
  iq = "SEARCHED"
  // dArray: any = new Array<Data>();
  result: any = [];
  isNoData = false;
  isHistory = false;
  // dataSource: any;
  dataSource!: MatTableDataSource<any>;
  dArry = [
    { Name: 'DMart', Number: '765', MobileNo: '9515095470', status: 'INACTIVE', date: '03/10/2022' },
    { Name: 'Vijetha', Number: '223', MobileNo: '89859383416', status: 'ACTIVE', date: '03/10/2022' },
    { Name: 'Ratnadeep', Number: '313', MobileNo: '6300987645', status: 'INACTIVE', date: '03/10/2022' },
    { Name: 'Zepto', Number: '4123', MobileNo: '987567890', status: 'NEW', date: '03/10/2022' },
    { Name: 'Reliance ', Number: '5123', MobileNo: '654789032', status: 'ACTIVE', date: '03/10/2022' },
    { Name: 'More', Number: '123', MobileNo: '7890987653', status: 'NEW', date: '03/10/2022' },
    { Name: 'Zomato', Number: '7123', MobileNo: '8796567890', status: 'INACTIVE', date: '03/10/2022' },
    { Name: 'Swiggy', Number: '8888', MobileNo: '13234567890', status: 'INACTIVE', date: '03/10/2022' },
  ]
  openDAta() {
    this.router.navigate(['data'])
  }

  multiSearchFn() {

    this.isHistory = true;
    this.result = []
    if (this.mNumSearch || this.nameSearch || this.mobileSearch || this.statusSearch && this.dArry.length > 0) {
      if (this.mNumSearch && !this.nameSearch && !this.mobileSearch && !this.statusSearch && this.dArry.length > 0) {

        for (let i = 0; i <= this.dArry.length; i++) {
          let element = this.dArry[i];
          if (element?.Number.toLowerCase().indexOf(this.mNumSearch) >= 0) {
            this.result.push(element);
            this.dataSource = this.result;
          }
        }

      }
      if (this.nameSearch && !this.mNumSearch && !this.mobileSearch && !this.statusSearch && this.dArry.length > 0) {
        for (let i = 0; i <= this.dArry.length; i++) {
          let element = this.dArry[i];
          if (element?.Name.toLowerCase().indexOf(this.nameSearch.toLowerCase()) >= 0) {
            this.result.push(element);
            this.dataSource = this.result;
          }
        }
      }
      if (this.mobileSearch && !this.mNumSearch && !this.nameSearch && !this.statusSearch && this.dArry.length > 0) {
        for (let i = 0; i <= this.dArry.length; i++) {
          let element = this.dArry[i];
          if (element?.MobileNo.indexOf(this.mobileSearch) >= 0) {
            this.result.push(element);
            this.dataSource = this.result;
          }
        }
      }
      if (this.statusSearch && !this.mNumSearch && !this.nameSearch && !this.mobileSearch && this.dArry.length > 0) {
        for (let i = 0; i <= this.dArry.length; i++) {
          let element = this.dArry[i];
          if (element?.status == this.statusSearch) {
            this.result.push(element);
            this.dataSource = this.result;
          }
        }
      }
      if (this.mNumSearch && this.nameSearch && !this.mobileSearch && !this.statusSearch && this.dArry.length > 0) {
        for (let i = 0; i <= this.dArry.length; i++) {
          let element = this.dArry[i];
          if (element?.Number.indexOf(this.mNumSearch) >= 0 && element?.Name.toLowerCase().indexOf(this.nameSearch.toLowerCase()) >= 0) {
            this.result.push(element);
            this.dataSource = this.result;
            // console.log(this.result.length)
          }
        }
      }
      if (this.mNumSearch && !this.nameSearch && this.mobileSearch && !this.statusSearch && this.dArry.length > 0) {
        for (let i = 0; i <= this.dArry.length; i++) {
          let element = this.dArry[i];
          if (element?.MobileNo.indexOf(this.mobileSearch) >= 0 && element?.Number.indexOf(this.mNumSearch) >= 0) {
            this.result.push(element);
            this.dataSource = this.result;
          }
        }
      }
      if (this.mNumSearch && !this.nameSearch && !this.mobileSearch && this.statusSearch && this.dArry.length > 0) {
        for (let i = 0; i <= this.dArry.length; i++) {
          let element = this.dArry[i];
          if (element?.Number.toLowerCase().indexOf(this.mNumSearch.toLowerCase()) >= 0 && element?.status === this.statusSearch) {
            this.result.push(element);
            this.dataSource = this.result;
          }
        }
      }
      if (!this.mNumSearch && this.nameSearch && this.mobileSearch && !this.statusSearch && this.dArry.length > 0) {
        for (let i = 0; i <= this.dArry.length; i++) {
          let element = this.dArry[i];
          if (element?.MobileNo.indexOf(this.mobileSearch) >= 0 && element?.Name.toLowerCase().indexOf(this.nameSearch.toLowerCase()) >= 0) {
            this.result.push(element);
            this.dataSource = this.result;
          }
        }
      }
      if (!this.mNumSearch && this.nameSearch && !this.mobileSearch && this.statusSearch && this.dArry.length > 0) {
        for (let i = 0; i <= this.dArry.length; i++) {
          let element = this.dArry[i];
          if (element?.status === this.statusSearch && element?.Name.toLowerCase().indexOf(this.nameSearch.toLowerCase()) >= 0) {
            this.result.push(element);
            this.dataSource = this.result;
          }
        }
      }
      if (!this.mNumSearch && !this.nameSearch && this.mobileSearch && this.statusSearch && this.dArry.length > 0) {
        for (let i = 0; i <= this.dArry.length; i++) {
          
          let element = this.dArry[i];
          if ((element?.MobileNo.indexOf(this.mobileSearch) >= 0) && element?.status === this.statusSearch) {
            this.result.push(element);
            this.dataSource = this.result;
          }
          
        }
      }
      if (this.mNumSearch && this.nameSearch && this.mobileSearch && !this.statusSearch && this.dArry.length > 0) {
        for (let i = 0; i <= this.dArry.length; i++) {
          
          let element = this.dArry[i];
          if ((element?.MobileNo.indexOf(this.mobileSearch) >= 0) && element?.Number.indexOf(this.mNumSearch) >= 0 && element?.Name.toLowerCase().indexOf(this.nameSearch.toLowerCase()) >= 0) {
            this.result.push(element);
            this.dataSource = this.result;
          }
          
        }
      }
      if (!this.mNumSearch && this.nameSearch && this.mobileSearch && this.statusSearch && this.dArry.length > 0) {
        for (let i = 0; i <= this.dArry.length; i++) {
        
          let element = this.dArry[i];
          if ((element?.MobileNo.indexOf(this.mobileSearch) >= 0) && element?.status === this.statusSearch && element?.Name.toLowerCase().indexOf(this.nameSearch.toLowerCase()) >= 0) {
            this.result.push(element);
            this.dataSource = this.result;
          }
        
        }
      }
      if (this.mNumSearch && this.nameSearch && !this.mobileSearch && this.statusSearch && this.dArry.length > 0) {
        for (let i = 0; i <= this.dArry.length; i++) {
          
          let element = this.dArry[i];
          if ((element?.Number.indexOf(this.mNumSearch) >= 0) && element?.status === this.statusSearch && element?.Name.toLowerCase().indexOf(this.nameSearch.toLowerCase()) >= 0) {
            this.result.push(element);
            this.dataSource = this.result;
          }
          
        }
      }
      if (this.mNumSearch && !this.nameSearch && this.mobileSearch && this.statusSearch && this.dArry.length > 0) {
        for (let i = 0; i <= this.dArry.length; i++) {
          
          let element = this.dArry[i];
          if ((element?.Number.indexOf(this.mNumSearch) >= 0) && element?.status === this.statusSearch && element?.status === this.nameSearch) {
            this.result.push(element);
            this.dataSource = this.result;
          }
          
        }
      }
      if (this.mNumSearch && this.nameSearch && this.mobileSearch && this.statusSearch && this.dArry.length > 0) {
        for (let i = 0; i <= this.dArry.length; i++) {
          
          let element = this.dArry[i];
          if ((element?.Number.indexOf(this.mNumSearch) >= 0) && element?.status === this.statusSearch && element?.Name.toLowerCase().indexOf(this.nameSearch.toLowerCase()) >= 0 && element?.MobileNo.indexOf(this.mobileSearch) >= 0) {
            this.result.push(element);
            this.dataSource = this.result;
          }
        
        }
      }
    }

    // debugger
    if (this.result.length == 0) {
      // debugger
      this.dataSource = this.result;
      this.isNoData = true;

    }

    console.log(this.result.length)
  }
  searched() {
    // this.nameSearch = this.nameSearch.toLowerCase();


    // if (this.dArry) {
    //   for (let i = 0; i < this.dArry.length; i++) {
    //     if ((this.dArry[i].Number === this.mNumSearch) && (this.dArry[i].Name === (this.nameSearch)) && (this.dArry[i].MobileNo === this.mobileSearch) && this.dArry[i].status === this.statusSearch) {
    //       this.result.push(this.dArry[i])
    //       this.dataSource = this.result;
    //     }
    //     else {


    if (this.mNumSearch !== "") {
      if (this.result.length > 0) {
        for (let i = 0; i < this.dArry.length; i++) {
          for (let j = 0; j < this.result.length; j++) {
            if ((this.dArry[i].Number === this.mNumSearch) && (this.result[j].mNumSearch === this.mNumSearch)) {
              // this.result.push(this.dArry[i])
              continue;
            }
          }
          // console.log(this.nameSearch.length())
        }
      }
      else if (this.result.length <= 0) {
        for (let i = 0; i < this.dArry.length; i++) {
          if (this.dArry[i].Number === this.mNumSearch) {
            this.result.push(this.dArry[i])
          }
        }
      }

    }
    if (this.nameSearch !== "") {
      if (this.result.length > 0) {
        for (let i = 0; i < this.dArry.length; i++) {
          // this.result.push(this.dArry[i])
          for (let j = 0; j < this.result.length; j++) {
            if ((this.result[j].Name === this.nameSearch) && (this.dArry[i].Name === this.nameSearch)) {
              // this.result.push(this.dArry[i])
              continue;
            }
            else {
              console.log("Naveen")
            }
          }

        }
      }
      else if (this.result.length <= 0) {
        for (let i = 0; i < this.dArry.length; i++) {
          if (this.dArry[i].Name === this.nameSearch) {
            this.result.push(this.dArry[i])
          }
        }
      }

    }
    if (this.mobileSearch !== "") {
      if (this.result.length > 0) {
        for (let i = 0; i < this.dArry.length; i++) {
          // this.result.push(this.dArry[i])
          for (let j = 0; j < this.result.length; j++) {
            if ((this.result[j].MobileNo === this.mobileSearch) && (this.dArry[i].MobileNo === this.mobileSearch)) {
              // this.result.push(this.dArry[i])
              continue;
            }
          }
        }
      }
      else if (this.result.length <= 0) {
        for (let i = 0; i < this.dArry.length; i++) {
          if (this.dArry[i].MobileNo === this.mobileSearch) {
            this.result.push(this.dArry[i])
          }
        }
      }
    }
    if (this.statusSearch !== "") {
      if (this.result.length > 0) {
        for (let i = 0; i < this.dArry.length; i++) {
          // this.result.push(this.dArry[i])
          for (let j = 0; j < this.result.length; j++) {
            if ((this.result[j].status === this.statusSearch) && (this.dArry[i].status === this.statusSearch)) {
              // this.result.push(this.dArry[i])
              continue;
            }
          }
        }
      }
      else if (this.result.length <= 0) {
        for (let i = 0; i < this.dArry.length; i++) {
          if (this.dArry[i].status === this.statusSearch) {
            this.result.push(this.dArry[i])
          }
        }
      }
    }
    // if (this.result.length = 0) {
    //   this.isNoData=false;
    // }
    this.dataSource = this.result;

  }
  // else {
  //   for (let j = 0; j < this.result.length; j++) {
  //     if ((this.result[j].Name !== this.nameSearch) && (this.dArry[i].Name === this.nameSearch)) {
  //       this.result.push(this.dArry[i])
  //     }
  //   }
  // }



  //   if (this.mobileSearch != "")  {
  //     this.result.push(this.dArry[i])
  //   }
  //   if ((this.statusSearch != "") && this.dArry[i].status === this.statusSearch) {
  //     this.result.push(this.dArry[i])

  //   }
  //   if ((this.mNumSearch != "") && (this.nameSearch != "") && ((this.dArry[i].Name === this.nameSearch) && (this.dArry[i].Number === this.mNumSearch))) {

  //     this.result.push(this.dArry[i])

  //   }



  // console.log(this.result)
  // }


  // if (this.mNumSearch.length != 0) {
  //   for (let i = 0; i < this.dArry.length; i++) {

  //     if ((this.dArry[i].Number.toString() === this.mNumSearch)) {
  //       this.result.push(this.dArry[i])

  //     }
  //   }
  // }
  // if (this.nameSearch != "") {
  //   for (let i = 0; i < this.dArry.length; i++) {
  //     for (let j = 0; j < this.result.length; j++) {
  //       if ((this.dArry[i].Name.toLowerCase() === this.nameSearch.toLowerCase()) && (this.result[j].Name.toLowerCase !== this.nameSearch.toLowerCase())) {
  //         this.result.push(this.dArry[i])
  //       }
  //     }

  //   }
  // }
  // if (this.mobileSearch.length != 0) {
  //   for (let i = 0; i < this.dArry.length; i++) {
  //     for (let j = 0; j < this.result.length; j++) {
  //       if ((this.dArry[i].MobileNo.toString() === this.mobileSearch) && this.result[j].MobileNo.toString() !== this.mobileSearch) {
  //         this.result.push(this.dArry[i])
  //       }

  //     }
  //   }
  // }
  // if (this.mNumSearch.length != 0) {
  //   for (let i = 0; i < this.dArry.length; i++) {
  //     if (this.dArry[i].MobileNo.toString() === this.mNumSearch) {
  //       this.result.push(this.dArry[i]);
  //       console.log(this.result)
  //     }
  //   }
  // }
  // if (this.nameSearch != "") {
  //   for (let i = 0; i < this.dArry.length; i++) {
  //     for (let j = 0; j < this.result.length; j++) {
  //       if ((this.dArry[i].Name.toLowerCase() === this.nameSearch.toLowerCase()) && this.result[j].Name.toLowerCase() !== this.nameSearch.toLowerCase()) {
  //         this.result.push(this.dArry[i])
  //       }
  //     }
  //   }
  // }

  constructor(public datas: DataService, public router: Router) { }
  ngOnInit(): void {


    this.dataSource = new MatTableDataSource(this.dArry);
  }
  @ViewChild('page1') page1: MatPaginator;
  ngAfterViewInit() {
    // this.dArry = new MatTableDataSource(this.dArry);
    this.dataSource.paginator = this.page1;
  }

  clear(validData: any) {
    debugger
    this.result = []
    // this.result = this.dArry
    validData.form.reset();
    this.isNoData = false;

    // this.result = this.dArry


    this.dataSource = new MatTableDataSource(this.dArry);
    this.dataSource.paginator = this.page1;
    this.page1?.firstPage();

    console.log(this.dataSource.data)


    // this.searchInput=undefined


    this.isHistory = false;

debugger
  }
}
// export class Data {
//   Name: string | undefined;
//   Number: string | undefined;
//   MobileNo: string | undefined;
//   status: string | undefined;
//   date: string | undefined;
// }





//<---------------------------------------------------------------------------->
// this.searchInput=this.searchInput.toLowerCase();

//   if (!this.dArray) {
//     return this.dArray;
//   }
//   else {
//     this.dArray.filter((it: any) => {
//       if (JSON.stringify(it).toString().toLowerCase().includes(this.searchInput)) {
//         this.result.push(it);

//         console.log(this.result)
//         return this.dArray = this.result;
//       }
//       else if (this.searchInput === ''  ) {

//         console.log(this.result)
//         this.isTable=false;
//         this.result.length = 0;
//         return this.ip;

//       }

//     });
//     // this.result=this.dArray.filter(({Name})=>this.dArray.includes(Name))
//     // this.result.push(this.dArray.indexOf(1))
//     // console.log(this.result)
//   }
// else {
//   this.dArray.filter((it: any) =>{
//     // if (JSON.stringify(it).toString().toLowerCase().includes(this.searchInput)) {
//     //   this.result.push(it);

//     // }
//   re

//   });


// return this.result;
// }
