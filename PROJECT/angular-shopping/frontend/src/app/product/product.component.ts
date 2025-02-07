import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { CartService } from '../cart.service';
import { RouterLink, RouterOutlet,Router} from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [];
  searchTerm: string = '';
  selectedCategory: string = '';
  showLogin = false;
  dropdownVisible = false;
  maxPrice: number = Infinity;

  constructor(private productService: ProductService,private cartService: CartService,private router : Router,
    public authService:AuthService
  ) {}

  ngOnInit() {
    this.fetchProducts();
    if (this.authService.isLoggedIn()) {
      this.authService.fetchUserProfile().subscribe();
    }
  }



  fetchProducts() {
    this.productService.getProducts(this.searchTerm, this.selectedCategory).subscribe(
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
  viewProductDetails(productId: string) {
    this.router.navigate(['/product', productId]);
  }
  logout() {
    this.authService.logout();
  }
  showDropdown() {
    this.dropdownVisible = true;
  }

  hideDropdown() {
    this.dropdownVisible = false;
  }
  openLogin() {
    console.log('Opening login...');
    this.showLogin = true;
    document.body.classList.add('blur-background');
  }
}
