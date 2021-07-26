import { Component, OnInit } from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { Service } from '../app.service';
import { GlobalVariable } from '../global';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private service: Service,
  ) { }

  ngOnInit(): void {
    this.retrieveCart()
  }

  cart: any = []
  remove = faTimes
  baseApiUrl: any = GlobalVariable.BASE_API_URL;

  add(id : number, quantity : number, index: number) {
    if(quantity + 1 <= this.cart[index].product.quantity) {
      let parameter = {
        id: id,
        quantity: quantity + 1
      }
      this.service.updateCart('cart/update', parameter).subscribe(response => {
        this.retrieveCart()
      })
    }
  }

  subtract(id : number, quantity: number) {
    if(quantity - 1 >= 1) {
      let parameter = {
        id: id,
        quantity: quantity - 1
      }
      this.service.updateCart('cart/update', parameter).subscribe(response => {
        this.retrieveCart()
      })
    }else if(quantity - 1 === 0) {
      this.removeCart(id)
    }
  }

  removeCart(id: number) {
    let parameter = {
      _id: id
    }
    this.service.deleteCart('cart/delete', parameter).subscribe(response => {
      this.retrieveCart()
    })
  }

  retrieveCart() {
    this.service.retrieveCart('cart').subscribe(response => {
      this.cart = response
    })
  }

  returnTotal() {
    let temp = {
      total: 0,
      currency: ""
    }
    this.cart.forEach((el: { quantity: number; total: number; }) => {
      temp.total += el.quantity * el.total
    });
    temp.currency = this.cart.length > 0 ? this.cart[0].product.currency : ""
    
    return temp
  }
}
