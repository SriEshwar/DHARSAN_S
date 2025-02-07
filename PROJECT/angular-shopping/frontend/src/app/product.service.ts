import { HttpClient, HttpParams } from '@angular/common/http';
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


  addProduct(productData: FormData): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, productData);
  }
  setSelectedProduct(product: Product) {
    this.selectedProductSubject.next(product);
  }

  clearSelectedProduct() {
    this.selectedProductSubject.next(null);
  }

  getProducts(search?: string, category?: string): Observable<Product[]> {
    let params = new HttpParams();
    if (search) {
      params = params.set('search', search);
    }
    if (category) {
      params = params.set('category', category);
    }
    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`);
  }

  rateProduct(productId: string, rating: number, userId: string): Observable<Product> {
    const body = { rating, userId };
    return this.http.post<Product>(`${this.apiUrl}/${productId}/rate`, body);
  }

  reviewProduct(productId: string, review: string, userId: string): Observable<Product> {
    const body = { review, userId };
    return this.http.post<Product>(`${this.apiUrl}/${productId}/review`, body);
  }
}
