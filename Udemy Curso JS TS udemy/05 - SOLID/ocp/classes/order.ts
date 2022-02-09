import { OrderStatus } from "./interfaces/order-status";
import {Messaging} from "../services/messaging";
import {Persistency} from "../services/persistency";
import {NewShoppingCart} from "./shopping-cart";

export class Order {
  private _orderStatus: OrderStatus = 'Open';

  constructor(
    private readonly cart: NewShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ){}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

 checkout(): void{
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
  }
    this._orderStatus = 'Closed';
    this.messaging.sendMessage( 'Seu pedido foi recebido' );
    this.persistency.saveOrder();
    this.cart.clear();
}



}
