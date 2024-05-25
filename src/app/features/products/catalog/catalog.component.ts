import { Component, OnInit } from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(public productService:ProductService) { }
  products:ProductType[] = []
  ngOnInit() {
    this.productService.getProducts()
      .subscribe((data => {
        this.products = data
        console.log(data)
      }))
  }

}
