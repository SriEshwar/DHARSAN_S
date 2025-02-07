import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  rating: number = 0;
  postcode: string = '';
  review: string = '';
  hasRated: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
        if (this.product?.ratings) {
          this.hasRated = this.product.ratings.some(r => r.userId === 'currentUserId');
        }
      });
    }
  }
  getImageUrl(imagePath: string): string {
    return `http://localhost:3000/${imagePath}`;
  }

  addToCart(product: Product): void {
    if (product) {
      this.cartService.addToCart(product);
    }
  }

  buyNow(product: Product): void {
    if (product) {
      this.productService.setSelectedProduct(product);
    }
  }

  checkDelivery() {
    console.log('Checking delivery for postcode:', this.postcode);
  }
  submitReview() {
    if (this.product && this.rating && this.review) {
      this.productService.reviewProduct(this.product._id, this.review, 'currentUserId').subscribe(
        (updatedProduct: Product) => {
          this.product = updatedProduct;
          this.rating = 0;
          this.review = '';
          this.hasRated = true;
        },
        error => {
          console.error('Error submitting review:', error);
        }
      );
    }
  }

  getStarRating(rating: number): string {
    const fullStar = '★';
    const emptyStar = '☆';
    const stars = fullStar.repeat(rating) + emptyStar.repeat(5 - rating);
    return stars;
  }
}

