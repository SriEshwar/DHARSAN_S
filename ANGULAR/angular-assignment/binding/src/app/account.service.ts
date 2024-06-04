import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private client:HttpClient) { }

  getAllProducts(){
    return this.client.get("http://localhost:3000/products")
  }
}
