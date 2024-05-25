import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from "./home/main.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    MainComponent,
   ],
  imports: [
    SharedModule,
    NgbModule,
    RouterModule,
    MainRoutingModule,


  ],
  exports: [
    MainRoutingModule
  ]

})
export class MainModule {
}
