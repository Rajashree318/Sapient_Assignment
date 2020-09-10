import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public productList: Product[]=[];
  childFilterEvent(event: Product[]=[]) {
    this.productList = event;
  }  

  constructor() { }

  ngOnInit() {
  }

}
