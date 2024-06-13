import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

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
  delivery: number = 0; // Set delivery charges if any
  taxes: number = 0; // Set taxes if any
  total: number = 0;
  step: number = 1;
  cartService: any;

  constructor(private router: Router, private productService:ProductService) {}

  ngOnInit() {
    this.productService.selectedProduct$.subscribe(product => {
      if (product) {
        this.cartItems.push(product);
        this.calculateTotal();
      } else {
        console.error('No product found in product service');
      }
    });
    //else {
    //   // If no product is passed, get items from cart service
    //   this.cartItems = this.cartService.getCartItems();
    //   this.calculateTotal();
    // }
  }

  onShippingSubmit() {
    this.step = 2;
  }

  onDeliverySubmit() {
    this.step = 3;
  }

  onPaymentSubmit() {
    if (this.paymentMethod === 'creditCard' && this.cardDetails.billingSameAsShipping) {
      // Logic to use shipping address as billing address if applicable
      console.log("Billing address same as shipping address");
    }
    console.log("Payment method:", this.paymentMethod);
    console.log("Card details:", this.cardDetails);
    this.router.navigate(['/']);
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
}
