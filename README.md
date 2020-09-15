# REST API - Filter With click event

Technology used
--------------------------
HTML5, CSS3, Typescript, Bootstrap4,Angular 8

Description
--------------------
First i intalled Bootstrap4 and Angular 8 then i started working.(Fully responsive)
Here i used (https://api.spacexdata.com/v3/launches?limit=100) this API for fetching contents and images.
I have created product list and product item component for iterating items inside product. And Filteration Component For filteration purpose.
I have  created one service with name ShopinglistproductService for adding the API url.
product.ts
-----------------
I have created one model is product.ts here i written all the json object name

export class Product {
  filter(arg0: (t: any) => boolean): any {
    throw new Error("Method not implemented.");
  }
    mission_name: string;
    flight_number: number;
   mission_id: any;
   launch_year: number;
   land_success:string;
   launch_success:any;
   rocket:any;
   first_stage:any;
   cores:any;
   links:any;
   flickr_images: string;
    constructor(mission_name, flight_number,mission_id,launch_year = 0,launch_success,land_success,rocket, first_stage,flickr_images = ' ') {
        this.mission_name = mission_name
        this.flight_number= flight_number
        this.mission_id =mission_id
        this.launch_year =launch_year
        this.launch_success=launch_success
        this.land_success=land_success
        this.rocket=rocket
        this. first_stage= first_stage
        this.flickr_images =flickr_images
    }

}


Here is the productlist item.ts
----------------------------------------
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {ShopinglistproductService} from 'src/app/services/shopinglistproduct.service'
import { Product } from 'src/app/models/product';
const API_URL ='https://api.spacexdata.com/v3/launches?limit=100';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  @Input() products: Product[];
  productList: Product[]=[];
 
 [x:string]:any;
  constructor(private shopinglistproductService: ShopinglistproductService) { }

  ngOnInit() {
    this.shopinglistproductService.getProducts(API_URL).subscribe((products) => {
      this.productList=products;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.productList = this.products;
  }

}

productlist.html
------------------------
Here i used ngFor for looping purpose and it will show all product item data

<div class="row">
    <div class="col-md-6 col-lg-3 mt-4 " *ngFor="let product of productList">
      <app-product-item [productItem]="product"></app-product-item>
    </div>
  </div>
  

Here is the product item.html  (inside productlist component i have created product item component)
-------------------------------------------------------------------------------------------------------
Here i used interpolation for binding all data which is inside product list

<div class="card  shadow-sm">
    <img class="card-img-top" width="100%" height="186px;" src="{{productItem.links.flickr_images}}" alt="images">
    <div class="card-body">
      <p class="card-text" style="color:#3E5996"><b>{{productItem.mission_name}} #{{productItem.flight_number }}</b></p>
      <p class="card-text "><b>mission_id :  </b><span style="color:#849FDC">{{productItem.mission_id}}</span></p>
          <p class="card-text"><b>launch_year :  </b><span style="color:#849FDC"> {{productItem.launch_year}}</span></p>
          <p class="card-text"><b>Successful Launch : </b><span style="color:#849FDC"> {{productItem.launch_success}}</span></p>
          <p class="card-text"><b>Successful Landing :  </b> <span style="color:#849FDC">{{productItem.rocket.first_stage.cores[0].land_success}}</span></p>
    </div>
  </div>
  
  
  
  FILTERATION
  --------------
 I have created filter component ,if we click any of the year button then it will filters with yearwise and it will show productlist of that particular year.
 Here i used click event 
 
 Here is the filter.html
 --------------------------------
 
 <div class="card filters">
    <div class="card-header"><strong><h4>Filters</h4></strong></div>
    <div class="card-body">
        <form>
            <div class="formgroup" style="text-align: center;">
                <p>Launch Year</p>
                <hr>
            </div>
            <div class="formgroup" style="text-align: center;">
                <div class="raj">
                <button type="button"  class="{{yearFilter === 2006 ? 'button1 active' : 'button1'}}" (click)="handleYearFilter(2006)" >2006</button>
                <button type="button"  class="{{yearFilter === 2007 ? 'button2 active' : 'button2'}}" (click)="handleYearFilter(2007)">2007</button> <br>
                <button type="button"  class="{{yearFilter === 2008 ? 'button1 active' : 'button1'}}" (click)="handleYearFilter(2008)">2008</button>
                <button type="button"  class="{{yearFilter === 2009 ? 'button2 active' : 'button2'}}" (click)="handleYearFilter(2009)">2009</button> <br>
                <button type="button"  class="{{yearFilter === 2010 ? 'button1 active' : 'button1'}}" (click)="handleYearFilter(2010)">2010</button>
                <button type="button"  class="{{yearFilter === 2011 ? 'button2 active' : 'button2'}}" (click)="handleYearFilter(2011)">2011</button> <br>
                <button type="button"  class="{{yearFilter === 2012 ? 'button1 active' : 'button1'}}" (click)="handleYearFilter(2012)">2012</button>
                <button type="button"  class="{{yearFilter === 2013 ? 'button2 active' : 'button2'}}" (click)="handleYearFilter(2013)">2013</button> <br>
                <button type="button"  class="{{yearFilter === 2014 ? 'button1 active' : 'button1'}}" (click)="handleYearFilter(2014)">2014</button>
                <button type="button"  class="{{yearFilter === 2015 ? 'button2 active' : 'button2'}}" (click)="handleYearFilter(2015)">2015</button> <br>
                <button type="button"  class="{{yearFilter === 2016 ? 'button1 active' : 'button1'}}" (click)="handleYearFilter(2016)">2016</button>
                <button type="button"  class="{{yearFilter === 2017 ? 'button2 active' : 'button2'}}" (click)="handleYearFilter(2017)">2017</button> <br>
                <button type="button"  class="{{yearFilter === 2018 ? 'button1 active' : 'button1'}}" (click)="handleYearFilter(2018)">2018</button>
                <button type="button"  class="{{yearFilter === 2019 ? 'button2 active' : 'button2'}}" (click)="handleYearFilter(2019)">2019</button> <br>
                <button type="button"  class="{{yearFilter === 2020 ? 'button1 active' : 'button1'}}" (click)="handleYearFilter(2020)">2020</button>
            
            </div>
            </div><br>
            <div class="formgroup" style="text-align: center;">
                <p>Successful Launch</p>
                <hr>
                <button type="button" class="{{launchFilter === true ? 'button1 active' : 'button1'}}" (click)="handleLaunchFilter(true)">True</button>
                <button type="button" class="{{launchFilter === false ? 'button2 active' : 'button2'}}" (click)="handleLaunchFilter(false)">False</button><br>
            </div><br>
            <div class="formgroup" style="text-align: center;">
                <p>Successful Landing</p>
                <hr>
                <button type="button" class="{{landingFilter === true ? 'button1 active' : 'button1'}}" (click)="handleLandingFilter(true)">True</button>
                <button type="button" class="{{landingFilter === false ? 'button2 active' : 'button2'}}" (click)="handleLandingFilter(false)">False</button>
            </div>

        </form>
    </div>
</div>


filter.ts
-------------------------


import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ShopinglistproductService} from 'src/app/services/shopinglistproduct.service'
import { Product } from 'src/app/models/product';
// import {Observable} from 'rxjs';

import {  HttpClient } from '@angular/common/http';
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




