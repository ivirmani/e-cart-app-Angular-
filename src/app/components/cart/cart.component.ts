import { CartapiService } from './../../services/cartapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any=[];
  allProducts:any=0;
  constructor(private cartApi:CartapiService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.products=res;
      this.allProducts=this.cartApi.getTotalAmount();
    })
  }
  removeProduct(item:any){
    this.cartApi.removeCartData(item);
  }
  removeAllProducts(){
    this.cartApi.removeAllCart();
  }
}
