import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {OrderTitleService} from "./services/order-title.service";
import {ProductService} from "./services/product.service";



@NgModule({
  declarations: [

   ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
