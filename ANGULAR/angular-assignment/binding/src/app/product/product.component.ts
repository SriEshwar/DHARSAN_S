import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productData : any;
  constructor(private service:AccountService){}

  ngOnInit(){
    this.service.getAllProducts().subscribe((data)=>{
      this.productData=data;
    })
  }
}
