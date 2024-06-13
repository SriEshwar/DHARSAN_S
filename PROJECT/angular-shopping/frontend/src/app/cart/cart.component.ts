import { Component } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../cart.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule,CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  removeItem(productId: string) {
    this.cartService.removeFromCart(productId);
  }

  // updateQuantity(productId: string, event: any) {
  //   const quantity = event.target.value;
  //   this.cartService.updateQuantity(productId, quantity);
  // }

  clearCart() {
    this.cartService.clearCart();
  }
  getImageUrl(imagePath: string): string {
    return `http://localhost:3000/${imagePath}`;
  }  
  updateQuantity(productId: string, event: any) {
    const quantity = Number(event.target.value);
    this.cartService.updateQuantity(productId, quantity);
  }

  increaseQuantity(item: Product) {
    this.cartService.updateQuantity(item._id, (item.quantity || 0) + 1);
  }

  decreaseQuantity(item: Product) {
    if (item.quantity && item.quantity > 1) {
      this.cartService.updateQuantity(item._id, item.quantity - 1);
    }
  }

  getTotalAmount(): number {
    return this.cartItems.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0);
  }
}
