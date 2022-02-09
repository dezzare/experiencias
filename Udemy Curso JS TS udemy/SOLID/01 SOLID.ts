//SOLID
//  Single Responsibility Principle = classe deve ter apenas um motivo para mudar
//  Open/closed Principle = módulos/classses/objetos abertos para extensão e fechado para modificação
//  Liskov Substition Principle = subtipos precisam ser substituíveis por seu tipos de base
//  Interface Segregation Principle = clientes não devem ser forçados a depender de interfaces que não utilizam
//  Dependency Inversion Principle = módulos de alto nível não devem depender de baixos níveis
//
//
//
//  Código "ingenuo" para ser refatorado utilizando SOLID
//

type CartItem = { name: string; price: number };
type OrderStatus = 'Open' | 'Closed'


export class ShoppingCart {
  private readonly _items: { name: string; price: number }[] = [];
  private _orderStatus: OrderStatus = 'Open';


  addItem(item: CartItem): void{
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
    .reduce((total, next) => total + next.price, 0)
    .toFixed(2);
  }

  checkout(): void{
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
  }
    this._orderStatus = 'Closed';
    this.sendMessage( 'Seu pedido foi recebido' );
    this.saveOrder();
    this.clear();
}
  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void{
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void{
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    this._items.length = 0;
    console.log('Carrinho de compras foi limpo');
  }

}


const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 50.9 });
shoppingCart.addItem({ name: 'Caderno', price: 19.9 });
shoppingCart.addItem({ name: 'Caneta', price: 4.9 });

console.log(shoppingCart.items);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
