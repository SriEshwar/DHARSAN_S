import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = 'http://localhost:3000/api/reviews';

  constructor(private http: HttpClient) {}

  getReviewsByProductId(productId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/product/${productId}`);
  }

  addReview(productId: string, review: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/product/${productId}`, review);
  }
}
