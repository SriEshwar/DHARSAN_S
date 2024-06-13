import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/products';
  private selectedProductSubject = new BehaviorSubject<Product | null>(null);
  selectedProduct$ = this.selectedProductSubject.asObservable();


  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  addProduct(productData: FormData): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, productData);
  }
  setSelectedProduct(product: Product) {
    this.selectedProductSubject.next(product);
  }

  clearSelectedProduct() {
    this.selectedProductSubject.next(null);
  }
}
