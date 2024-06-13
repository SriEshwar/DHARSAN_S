import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  image: string;
  rating?: number;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  showForm = false;
  products: Product[] = [];
  productName: string = '';
  productPrice: number = 0;
  selectedFile: File | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit() {
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('name', this.productName);
    formData.append('price', this.productPrice.toString());
    formData.append('image', this.selectedFile, this.selectedFile.name);

    this.productService.addProduct(formData).subscribe(
      (newProduct: Product) => {
        this.products.push(newProduct);
        this.toggleForm();
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
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
}
