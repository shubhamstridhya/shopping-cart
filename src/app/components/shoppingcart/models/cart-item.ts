import { Product } from "./product";

export class CartItem {
    id!:number;
    // id!:number;
    productId!: number;
    productName?:string;
    qty!: number;
    price!:number;
    imageurl?:string;

    constructor(id:number, product:Product , qty=1){
        this.id = id;
        // this.productId = product.id;
        // this.productName = product.name;
        this.qty = qty;
        this.price = product.price;
        this.imageurl=product.imageurl;
    }

}
