import { Component } from '@angular/core';
import { product } from './product.models';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products:product[]=[{productId:101,productName:"Macbook",cost:80000,category:"Electronics"},
  {productId:102,productName:"laptop",cost:40000,category:"Electronics"},
  {productId:103,productName:"Mobile",cost:20000,category:"Electronics"},
  {productId:104,productName:"coc",cost:40,category:"Beverages"},
  {productId:105,productName:"7up",cost:35,category:"Beverages"},
  {productId:106,productName:"Pendrive",cost:400,category:"Electronics"},
  {productId:107,productName:"Pen",cost:50,category:"Stationary"},
  {productId:108,productName:"Bag",cost:1000,category:"Stationary"}
  ];

}
