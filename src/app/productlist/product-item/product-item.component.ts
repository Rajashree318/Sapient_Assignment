import { Product } from 'src/app/models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;
// [x:string]:any;

first_stage: boolean[];
  constructor() {

  }

  ngOnInit() {
  }
  
}
