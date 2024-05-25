import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../types/product.type";
import {Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products:ProductType[] = []
  public product: ProductType

  constructor(private http: HttpClient) { }

  getProductById(id: number): Observable<ProductType> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/tea')
      .pipe(tap(data => this.products = data));
  }

}



