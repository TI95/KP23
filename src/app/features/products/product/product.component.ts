import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product.type";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderTitleService} from "../../../shared/services/order-title.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    product: ProductType
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private orderTitle: OrderTitleService,
    private router: Router
  ) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(+productId).subscribe(data => {
        this.product = data;
        console.log(this.product)
      });
    }
  }

  addToForm (title:string): void {
    this.orderTitle.product = title;
    this.router.navigate(['/order'])
  }

}
