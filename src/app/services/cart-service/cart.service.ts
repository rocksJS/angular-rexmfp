import { Injectable } from '@angular/core';
import { Product } from 'src/app/products';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor() {}
}
