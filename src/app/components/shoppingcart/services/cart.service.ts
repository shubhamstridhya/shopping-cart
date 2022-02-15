import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { cartUrl } from 'src/app/components/shoppingcart/config/api';
import { Product } from '../models/product';
import { map } from 'rxjs';

const sendtocarturl='http://localhost:3001/api/cart';

const getcartUrl='http://localhost:3001/api/cart/mycart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // [x: string]: any;
  cartItems: any;
  subject: any;

  constructor(private http:HttpClient) { }
  getCartItem():Observable<any>{
    return this.http.get<any>(getcartUrl).pipe(
      map((result:any)=>{
        let cartItems:CartItem[]=[];
        console.log(result)

        for (let item of result.cart.products){
          // console.log(item)
          let productExists=false

        for(let i in cartItems){
          if(cartItems[i].productId===item.productId._id){
            cartItems[i].quantity++
            productExists=true
            break;
          }
        }

        if (!productExists){
          cartItems.push(
            new CartItem(
              item,
              item.quantity,
             item.subtotal
             )
            );

        }
        }

        return cartItems;
      })

    );
  }
  addProductsToCart(productId: any): Observable<any>{
    return this.http.post(sendtocarturl,{productId});
  }
  removeFromCart(product:any){
    return this.http.delete(getcartUrl +'/'+ product._id)
  }

  // sendMsg(product: Product){
  //   // console.log("13",product)
  // this.subject.next(product as Product)//triggering an event
  // }
  // getMsg(){
  //   return this.subject.asObservable()
  // }
}
