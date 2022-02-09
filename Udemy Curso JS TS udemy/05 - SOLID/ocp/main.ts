// Open/Closed Principle
// Entidades devem estar abertas para extensão, mas fechadas para modificação
// adicionar totalWithDiscount() no shoppingCart = fere este princípio
// não devemos ficar alterando o nosso CF

import {Messaging} from "./services/messaging";
import {Order} from "./classes/order"
import {Persistency} from "./services/persistency";
import {Product} from "./classes/product";
import {NewShoppingCart} from "./classes/shopping-cart";
import {FiftyPercentDiscount, TenPercentDiscount} from "./classes/discount";

const tenPercentDiscount = new TenPercentDiscount();
//const fiftyPercentDiscount = new FiftyPercentDiscount();
const newShoppingCart = new NewShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(newShoppingCart, messaging, persistency);

newShoppingCart.addItem(new Product ('Camiseta', 50.9));
newShoppingCart.addItem(new Product ('Caderno', 19.9 ));
newShoppingCart.addItem(new Product('Caneta', 4.9));

console.log(newShoppingCart.items);
order.checkout();
console.log(order.orderStatus);
console.log(newShoppingCart.total())
console.log(newShoppingCart.totalWithDiscount())
