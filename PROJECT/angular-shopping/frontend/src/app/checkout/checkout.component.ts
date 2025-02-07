import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  shippingDetails = {
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    country: '',
    zip: '',
    city: '',
    state: ''
  };
  
  paymentMethod: string = '';
  cardDetails = {
    name: '',
    number: '',
    expiryDate: '',
    cvc: '',
    billingSameAsShipping: true
  };
  
  cartItems: Product[] = [];
  subtotal: number = 0;
  delivery: number = 0;
  taxes: number = 0;
  total: number = 0;
  step: number = 1;
  orderPlaced: boolean = false;
  countdown: number = 5;
  currentUser: any;
  constructor(private router: Router, private productService: ProductService, private cartService: CartService,private http: HttpClient,
    private authService: AuthService) {}

  ngOnInit() {
    this.productService.selectedProduct$.subscribe(product => {
      if (product) {
        this.cartItems.push(product);
        this.calculateTotal();
      } else {
        console.error('No product found in product service');
      }
    });
    this.authService.getUserProfile().subscribe(user => {
      this.currentUser = user;
    });
  }

  onShippingSubmit() {
    this.step = 2;
  }

  onDeliverySubmit() {
    this.step = 3;
  }

  onPaymentSubmit() {
    if (this.paymentMethod === 'creditCard' && this.cardDetails.billingSameAsShipping) {
      console.log("Billing address same as shipping address");
    }
  
    const order = {
      userId: this.currentUser._id,
      products: this.cartItems.map(item => ({
        productId: item._id,
        quantity: item.quantity || 1 
      })),
      deliveryDate: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000) 
    };
  
    console.log('Order to be submitted:', order); // Log the order object
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
  
    this.http.post('http://localhost:3000/api/orders', order, { headers }).subscribe(
      response => {
        console.log("Order saved successfully:", response);
        this.orderPlaced = true;
        this.startCountdown();
        setTimeout(() => {
          this.router.navigate(['/cart']);
        }, 5000);
      },
      error => {
        console.error('Error saving order:', error); // Log the error
      }
    );
  }
  

  calculateTotal() {
    this.subtotal = this.cartItems.reduce((sum, item) => sum + item.price, 0);
    this.total = this.subtotal + this.delivery + this.taxes;
  }

  handlePaymentButtonClick(method: string) {
    this.paymentMethod = method;
    this.onPaymentSubmit();
  }

  getImageUrl(imagePath: string): string {
    return `http://localhost:3000/${imagePath}`;
  }

  editShipping() {
    this.step = 1;
  }
  startCountdown() {
    const interval = setInterval(() => {
      if (this.countdown > 1) {
        this.countdown--;
      } else {
        clearInterval(interval);
        this.router.navigate(['/cart']);
      }
    }, 1000);
  }
}
