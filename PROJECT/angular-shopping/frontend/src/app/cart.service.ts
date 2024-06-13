import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  setProduct(product: any) {
    throw new Error('Method not implemented.');
  }
  private cartItems: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product) {
    const existingProduct = this.cartItems.find(item => item._id === product._id);
    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 0) + 1;
    } else {
      product.quantity = 1;
      this.cartItems.push(product);
    }
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(productId: string) {
    this.cartItems = this.cartItems.filter(item => item._id !== productId);
    this.cartSubject.next(this.cartItems);
  }

  updateQuantity(productId: string, quantity: number) {
    const product = this.cartItems.find(item => item._id === productId);
    if (product) {
      product.quantity = quantity;
      this.cartSubject.next(this.cartItems);
    }
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }
}


