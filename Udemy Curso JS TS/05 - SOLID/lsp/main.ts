// Liskov Substition Pinciple
// Se o(x) é uma propriedade demonstrável dos objetos x de tipo T.
// Então o(y) deve ser verdadeiro para objetos y de tipo S.
// Onde S é um subtipo de T.
//
// Subtipos precisam ser subtituiveis por seus "pais"/tipo de base.
// Subtipos herdam caracteristicas dos Tipos, deve servir com qualquer outro Subtipo
//
// Intrinsicamente ligado com o conceito de herança em POO

//ex:

export class dicount1 extends Discount {
  protected readonly discount = 0.5
}


export class dicount2 extends Discount {
  protected readonly discount = 0.1
}


//quebra o princípio:
//aplica um comportamento diferente dos outros
export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}

