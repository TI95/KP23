import {Component, OnInit} from '@angular/core';
import {OrderTitleService} from "../../shared/services/order-title.service";
import {FormBuilder,Validators,FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  isHidden = false;
  orderError = false;

  orderForm:FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ]+$')]],
    number: ['', [Validators.required, Validators.pattern('^\\+?\\d{11}$')]],
    country: ['', [Validators.required]],
    index: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ0-9\\s\\-\\/]+$')]],
    productTitle: ['', [Validators.required]],
    comment: ''
  })

  get name() {
    return this.orderForm.get('name');
  }

  get lastName() {
    return this.orderForm.get('lastName');
  }

  get number() {
    return this.orderForm.get('number');
  }

  get country() {
    return this.orderForm.get('country');
  }

  get index() {
    return this.orderForm.get('index');
  }

  get address() {
    return this.orderForm.get('address');
  }

  get productTitle() {
    return this.orderForm.get('productTitle');
  }
  get comment() {
    return this.orderForm.get('comment');
  }

  constructor(private orderTitle: OrderTitleService, private fb: FormBuilder, private http:HttpClient) {
  }

  ngOnInit(): void {
    this.orderForm.patchValue({
      productTitle: this.orderTitle.product
    })
  }



  checkOrder () {
      if(this.orderForm.valid){
       this.http.post<{ success: boolean, message?: string }>('https://testologia.ru/order-tea', {
          name: this.name.value,
          last_name: this.lastName.value,
          phone: this.number.value,
          country: this.country.value,
          zip: this.index.value,
          product: this.productTitle.value,
          address: this.address.value,
          comment: this.comment.value,
        })
         .subscribe(response => {
           if(response.success){
             this.isHidden = true;
             this.orderError = false;
           }
           else {
             this.orderError = true;
           }
         })
      }
  }

}
