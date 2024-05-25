import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/layout/header/header.component';
import {FooterComponent} from './shared/layout/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {MainModule} from "./features/main/main.module";
import {ProductsModule} from "./features/products/products.module";
import {OrderModule} from "./features/order/order.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    MainModule,
    OrderModule,
    ProductsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
