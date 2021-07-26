import { Component, OnInit, Optional } from '@angular/core';
import {Router} from '@angular/router';
import { Service } from '../app.service';
import { Product } from '../product-interface';
import { GlobalVariable } from '../global';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(
    private router: Router,
    private service: Service,
    
  ) { }
  products: any = []
  search_value: any = ''
  baseApiUrl: any = GlobalVariable.BASE_API_URL;

  ngOnInit(): void {
    this.retrieveProducts();
  }


  viewDetails(id : number) {
    this.router.navigateByUrl(`/details/${id}`)
  }

  retrieveProducts() {
    this.service.getProductList('list').subscribe(response => {
      this.products = response
    })
  }

  search(e: any) {
    if(e.target.value !== ''){
      let temp = e.target.value
      this.service.searchProduct(`/product/search/${temp}`).subscribe(response => {
        this.products = response
      })
    }else {
      this.retrieveProducts()
    }
  }

}
