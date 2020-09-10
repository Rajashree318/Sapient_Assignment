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
