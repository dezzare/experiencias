//classificação de Dados Estruturados (em geral)
//  Forma de Alocação
// Estáticos = criado no início do programa e manteém até o final = Vetor, Registro, Matriz
// Dinâmicos = durante execução = Ponteiros
//  Tipos de Dados
//Homogêneos = Vetores Matrizes
//Heterogêneos = Registros
//
#include <stdio.h>

int main()
{
  //
  //Declaração de Vetor
  int num[5];
  int numeros[5] = {1, 2, 3, 4, 5};
  num[0] = 1;
  num[1] = 2;
  num[2] = 3;
  num[3] = 4;
  num[4] = 5;

  printf("Numero 0 = %d\n", num[0]);
  printf("Numero 1 = %d\n", num[1]);
  printf("Numero 2 = %d\n", num[2]);
  printf("Numero 3 = %d\n", num[3]);
  printf("Numero 4 = %d\n", num[4]);


  return 0;
}
