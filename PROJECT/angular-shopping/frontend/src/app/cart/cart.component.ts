import { Component } from '@angular/core';
import { Order, Product } from '../models/product';
import { CartService } from '../cart.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from '../product.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule,CurrencyPipe,RouterOutlet,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: Product[] = [];
  orderedItems: Product[] = [];
  view: string = 'cart';
  currentUser: any;
  orderList:  Order[] = [];
  orderProductsMap: Map<string, Product[]> = new Map();

  constructor(private cartService: CartService, private router: Router,    private http: HttpClient,
    private authService: AuthService,private productService : ProductService) {}

    ngOnInit() {
      this.cartService.cart$.subscribe(items => {
        this.cartItems = items;
      });
      this.authService.getUserProfile().subscribe(user => {
        this.currentUser = user;
        if (this.currentUser && this.currentUser._id) {
          this.fetchOrders();
        }
      });
    }
  
    fetchOrders() {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
      this.http.get<Order[]>(`http://localhost:3000/api/orders/${this.currentUser._id}`, { headers }).subscribe(
        (orders: Order[]) => {
          console.log('Fetched orders:', orders);
          this.orderList = orders.map(order => {
            const deliveryDate = new Date(order.deliveryDate);
            const today = new Date();
            const diffDays = Math.ceil((deliveryDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
            return {
              ...order,
              canBeCanceled: diffDays > 2,
              isDelivered: diffDays <= 0
            };
          });
        },
        error => {
          console.error('Error fetching orders', error);
        }
      );
    }
    
  
    cancelOrder(orderId: string) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
      this.http.delete(`http://localhost:3000/api/orders/${orderId}`, { headers }).subscribe(
        () => {
          this.fetchOrders();
        },
        error => {
          console.error('Error canceling order', error);
        }
      );
    }
    showCart() {
      this.view = 'cart';
    }
  
    showOrderSummary() {
      this.view = 'orderSummary';
    }
  
    removeItem(productId: string) {
      this.cartService.removeFromCart(productId);
    }
  
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
  
    backToProduct(): void {
      this.router.navigate(['/products']);
    }
  
    buyNow(): void {
      // Add buy now logic if needed
    }

}
