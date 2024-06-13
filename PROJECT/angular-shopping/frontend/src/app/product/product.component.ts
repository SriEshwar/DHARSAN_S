import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { CartService } from '../cart.service';
import { RouterLink, RouterOutlet,Router} from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [];

  constructor(private productService: ProductService,private cartService: CartService,private router : Router) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  getImageUrl(imagePath: string): string {
    return `http://localhost:3000/${imagePath}`;
  }
  
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  buyNow(product: any) {
    this.productService.setSelectedProduct(product);
    this.router.navigate(['checkout']);
  }
}
