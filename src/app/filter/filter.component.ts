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
  yearFilter = '';
  launchFilter = '';
  landingFilter = '';
  [x:string]:any;

  ngOnInit() {
  }

  applyFilter() { 
    const API_URL_FILTER = `${API_URL}${this.yearFilter === '' ? '' : `&launch_year=${this.yearFilter}`}${this.launchFilter === '' ? '' : `&launch_success=${this.launchFilter}`}${this.landingFilter === '' ? '' : `&land_success=${this.landingFilter}`}`;
    this.shopinglistproductService.getProducts(API_URL_FILTER).subscribe((products) => {
      this.productList.emit(products);
    });
  }

  handleYearFilter(year) {
    this.yearFilter === year ? this.yearFilter = '' : this.yearFilter = year;
    this.applyFilter();
  }

  handleLaunchFilter(bool) {
    this.launchFilter === bool ? this.launchFilter = '' : this.launchFilter = bool;
    this.applyFilter();
  }

  handleLandingFilter(bool) {
    this.landingFilter === bool ? this.landingFilter = '' : this.landingFilter = bool;
    this.applyFilter();
  }
}
