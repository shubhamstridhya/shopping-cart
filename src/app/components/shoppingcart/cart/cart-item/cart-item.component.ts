import { Component, OnInit , Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
@Input() cartItem:any
  constructor() { }

  ngOnInit(): void {
    console.log(this.cartItem)
  }

}
