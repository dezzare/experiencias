// Interface Segregation Principle
// os clientes não devem ser forçados a depender de interfaces que não utilizam;
//
//exemplo de violação do princípio:
export interface Customer {
  firsName: string;
  lastName: string;
  cpf: string;
  cnpj: string;
}
