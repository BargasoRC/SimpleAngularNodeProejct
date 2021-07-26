import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Service } from '../app.service';
import { GlobalVariable } from '../global';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  product: any = {}
  quantity = 1
  viewIndex = 0
  id: String = ''
  baseApiUrl: any = GlobalVariable.BASE_API_URL;

  constructor(
    private route: ActivatedRoute,
    private service: Service,
  ) { }

  ngOnInit(): void {
    this.retrieveById()
  }
  
  changeView(id : number) {
    this.viewIndex = id
  }

  retrieveById() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')!
    })
    console.log(this.id)
    this.service.getProductById(`product/${this.id}`).subscribe(response => {
      this.product = response
    })
  }

  addToCart() {
    console.log("Adding to cart...")
    let parameter = {
      product: this.id,
      quantity: this.quantity,
      total: this.quantity * this.product.price
    }
    this.service.addToCart('cart/add', parameter).subscribe(response => {
      alert("Successfully added to cart!")
    })
  }

  add() {
    if(this.quantity + 1 > this.product.quantity) {
      this.quantity += 0
    }else {
      this.quantity += 1
    }
  }

  substract() {
    if(this.quantity - 1 < this.product.quantity && this.quantity - 1 > 0) {
      this.quantity -= 1
    }else {
      this.quantity -= 0
    }
  }

}
