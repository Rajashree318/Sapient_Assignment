// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import {ShopinglistproductService} from 'src/app/services/shopinglistproduct.service'
// import { Product } from 'src/app/models/product';
// import {Observable} from 'rxjs';
// import {  HttpClient } from '@angular/common/http';
// // import { EventEmitter } from 'events';
// let API_URL ='https://api.spacexdata.com/v3/launches?limit=100';

// @Component({
//   selector: 'app-filter',
//   templateUrl: './filter.component.html',
//   styleUrls: ['./filter.component.css']
// })
// export class FilterComponent implements OnInit {
//   @Output() productList = new EventEmitter<Product[]>();
//   constructor(private shopinglistproductService: ShopinglistproductService,private http:HttpClient) { }
//   yearFilter: number = 0;
//      launchFilter: boolean = null;
//     landingFilter: boolean = null;
//   ngOnInit() {
//   }

//   applyFilter() { 
//     const API_URL_FILTER = `${API_URL}${this.yearFilter === 0 ? '' : `&launch_year=${this.yearFilter}`}${this.launchFilter === null ? '' : `&launch_success=${this.launchFilter}`}${this.landingFilter === null ? '' : `&land_success=${this.landingFilter}`}`;
//     this.shopinglistproductService.getProducts(API_URL_FILTER).subscribe((products) => {
//       this.productList.emit(products);
//     });
//   }

//   handleYearFilter(year) {
//     this.yearFilter === year ? this.yearFilter = 0 : this.yearFilter = year;
//     this.applyFilter();
//   }

//   handleLaunchFilter(bool) {
//     this.launchFilter === bool ? this.launchFilter = null : this.launchFilter = bool;
//     this.applyFilter();
//   }

//   handleLandingFilter(bool) {
//     this.landingFilter === bool ? this.landingFilter = null : this.landingFilter = bool;
//     this.applyFilter();
//   }
// }


import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ShopinglistproductService} from 'src/app/services/shopinglistproduct.service'
import { Product } from 'src/app/models/product';
import {Observable} from 'rxjs';
import { HttpClientModule, HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
// import { EventEmitter } from 'events';
let API_URL ='https://api.spacexdata.com/v3/launches?limit=100';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() productList = new EventEmitter<Product[]>();
  constructor(private shopinglistproductService: ShopinglistproductService,private http:HttpClient) { }
  yearFilter: number = 0;
  launchFilter: boolean = null;
  landingFilter: boolean = null;

  ngOnInit() {
  }

  applyFilter() { 
    const API_URL_FILTER = `${API_URL}${this.yearFilter === 0 ? 0 : `&launch_year=${this.yearFilter}`}${this.launchFilter === null ? '' : `&launch_success=${this.launchFilter}`}${this.landingFilter === null ? '' : `&land_success=${this.landingFilter}`}`;
    this.shopinglistproductService.getProducts(API_URL_FILTER).subscribe((products) => {
      this.productList.emit(products);
    });
  }
  handleYearFilter(year) {
    this.yearFilter === year ? this.yearFilter = 0 : this.yearFilter = year;
    this.applyFilter();
  }

  handleLaunchFilter(bool) {
    this.launchFilter === bool ? this.launchFilter = null : this.launchFilter = bool;
    this.applyFilter();
  }

  handleLandingFilter(bool) {
    this.landingFilter === bool ? this.landingFilter = null : this.landingFilter = bool;
    this.applyFilter();
  }
}
