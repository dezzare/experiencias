import {Messaging} from "./messaging";
import {Order} from "./order";
import {Persistency} from "./persistency";
import {Product} from "./product";
import {NewShoppingCart} from "./shopping-cart";

const newShoppingCart = new NewShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(newShoppingCart, messaging, persistency);

newShoppingCart.addItem(new Product ('Camiseta', 50.9));
newShoppingCart.addItem(new Product ('Caderno', 19.9 ));
newShoppingCart.addItem(new Product('Caneta', 4.9));

console.log(newShoppingCart.items);
order.checkout();
console.log(order.orderStatus);
