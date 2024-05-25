import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderTitleService {
  product: string = '';
  constructor() { }
}
