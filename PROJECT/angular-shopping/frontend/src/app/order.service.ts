import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getOrdersByUserId(userId: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(`${this.apiUrl}/orders/${userId}`, { headers });
  }

  getProductById(productId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/${productId}`);
  }
}
