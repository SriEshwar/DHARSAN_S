import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = this.getFromLocalStorage('cartItems') || [];
  private orderedItems: Product[] = this.getFromLocalStorage('orderedItems') || [];
  private currentOrder: Product[] = this.getFromLocalStorage('currentOrder') || [];
  private orderPlacedTime: Date = this.getFromLocalStorage('orderPlacedTime') ? new Date(this.getFromLocalStorage('orderPlacedTime')) : new Date();
  private orderPlaced: boolean = this.getFromLocalStorage('orderPlaced') || false;

  cart$ = new BehaviorSubject<Product[]>(this.cartItems);
  orderedItems$ = new BehaviorSubject<Product[]>(this.orderedItems);
  currentOrder$ = new BehaviorSubject<Product[]>(this.currentOrder);
  orderPlaced$ = new BehaviorSubject<boolean>(this.orderPlaced);

  private updateLocalStorage(key: string, data: any) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }

  private getFromLocalStorage(key: string): any {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem(key) || 'null');
    }
    return null;
  }

  addToCart(product: Product) {
    const existingProduct = this.cartItems.find(item => item._id === product._id);
    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 0) + 1;
    } else {
      product.quantity = 1;
      this.cartItems.push(product);
    }
    this.updateLocalStorage('cartItems', this.cartItems);
    this.cart$.next(this.cartItems);
  }

  removeFromCart(productId: string) {
    this.cartItems = this.cartItems.filter(item => item._id !== productId);
    this.updateLocalStorage('cartItems', this.cartItems);
    this.cart$.next(this.cartItems);
  }

  updateQuantity(productId: string, quantity: number) {
    const product = this.cartItems.find(item => item._id === productId);
    if (product) {
      product.quantity = quantity;
      this.updateLocalStorage('cartItems', this.cartItems);
      this.cart$.next(this.cartItems);
    }
  }

  clearCart() {
    this.cartItems = [];
    this.updateLocalStorage('cartItems', this.cartItems);
    this.cart$.next(this.cartItems);
  }
}


