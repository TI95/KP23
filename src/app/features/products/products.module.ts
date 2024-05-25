import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductComponent} from "./product/product.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    CatalogComponent,
    ProductComponent,

  ],
  imports: [
    SharedModule,
    RouterModule,
    CommonModule,
    ProductsRoutingModule,

  ],
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
