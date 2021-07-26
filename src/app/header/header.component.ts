import { Component, OnInit } from '@angular/core';
import {faShoppingCart, faHome} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search = faShoppingCart;
  home = faHome;

}
