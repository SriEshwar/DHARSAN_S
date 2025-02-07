import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, tap, catchError, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';
  private refreshUrl = 'http://localhost:3000/api/refresh-token';
  private user: any = null;
  public token: string | null = null;

  constructor(private http: HttpClient, private router: Router) {
    if (this.isLocalStorageAvailable()) {
      this.token = localStorage.getItem('token');
      if (this.token) {
        this.fetchUserProfile().subscribe();
      }
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = 'localStorageTest';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (this.isLocalStorageAvailable()) {
          localStorage.setItem('token', response.token);
        }
        this.token = response.token;
        this.user = response.user;
      })
    );
  }

  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user).pipe(
      tap((response: any) => {
        if (this.isLocalStorageAvailable()) {
          localStorage.setItem('token', response.token);
        }
        this.token = response.token;
      })
    );
  }

  getUserName(): string {
    return this.user ? this.user.name : 'Guest';
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

  logout() {
    this.token = null;
    this.user = null;
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('token');
    }
    this.router.navigate(['/']);
  }

  fetchUserProfile(): Observable<any> {
    if (!this.token) {
      return of(null);
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(`${this.apiUrl}/profile`, { headers }).pipe(
      tap((user: any) => {
        console.log('Fetched user profile:', user); // Add this log
        this.user = user;
      }),
      catchError((error) => {
        if (error.status === 401 && error.error.message === 'jwt expired') {
          return this.refreshToken().pipe(
            switchMap(() => this.fetchUserProfile())
          );
        } else {
          console.error('Error fetching profile:', error);
          return of(null);
        }
      })
    );
  }

  refreshToken(): Observable<any> {
    return this.http.post(this.refreshUrl, { token: this.token }).pipe(
      tap((response: any) => {
        if (this.isLocalStorageAvailable()) {
          localStorage.setItem('token', response.token);
        }
        this.token = response.token;
      }),
      catchError((error) => {
        console.error('Error refreshing token:', error);
        this.logout();
        return of(null);
      })
    );
  }
  getToken(): string | null {
    return this.token;
  }
  getUserProfile(): Observable<any> {
    if (!this.token) {
      return of(null);
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(`${this.apiUrl}/profile`, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return of(null);
  }
}
