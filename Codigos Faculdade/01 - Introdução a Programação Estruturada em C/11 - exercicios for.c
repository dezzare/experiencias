#include <stdio.h>

int main()
{
  // Primeiro exercício: ler número e mostrar 20 vezes;
  // int numero;

  // printf("Digite um número: \n");
  // scanf("%d", &numero);

  // for (int cont = 1; cont <= 20; cont++)
  // {
  //   printf("%d: %d\n", cont, numero);
  // };

  //Segundo Exercícios ler 10 números e mostrar o maior
  // int maior, comparando;
  // for (int cont = 1; cont <= 10; cont++)
  // {
  //   printf("Digite um número: ");
  //   scanf("%d", &comparando);
  //   if (comparando > maior)
  //   {
  //     maior = comparando;
  //   }
  // }
  // printf("O maior número digitado foi: %d\n", maior);

  //Terceiro exercício ler 10 "salários" mostrar maior e a média
  // float maiorSalario, comparaSalario, mediaSalarios, totalSalarios;
  // int posicaoMaiorSalario;

  // for (int i = 1; i <= 10; i++)
  // {
  //   printf("Digite o salário nº %d: ", i);
  //   scanf("%f", &comparaSalario);
  //   totalSalarios = totalSalarios + comparaSalario;
  //   if (comparaSalario > maiorSalario)
  //   {
  //     maiorSalario = comparaSalario;
  //     posicaoMaiorSalario = i;
  //   };
  //   };
  // mediaSalarios = totalSalarios / 10;

  // printf("O maior salário foi o de nº %d, na quantia de R$%.2f\n", posicaoMaiorSalario, maiorSalario);
  // printf("A média de salários foi de R$%.2f\n", mediaSalarios);

  //Quarto Problema: ler tamanho lista, ler os Numeros,
  //calcular a soma dos numeros pares e impares da lista

  int somaPar, somaImpar, n, num;
  somaImpar = 0;
  somaPar = 0;

  printf("Digite a quantidade de números na lista: ");
  scanf("%d", &n);

  for (int i = 1; i <= n; i++)
  {
    printf("Digite um número na posição %d: ", i);
    scanf("%d", &num);
    if (num % 2 == 0)
    {
      somaPar = somaPar + num;
    }
    if (num % 2 != 0)
    {
      somaImpar = somaImpar + num;
    }
  }
  printf("Soma par = %d\n", somaPar);
  printf("Soma impar = %d\n", somaImpar);

  return 0;
}
