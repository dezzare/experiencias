#include <stdio.h>

int main()
{

  //do while, faz verificação ao final e retorna ao passo 1
  //a sequência será executada ao menos 1 vez

  //ler 5 numeros e mostrar o maior
  // int num = 0, maior = 0, cont = 0;

  // do
  // {
  //   cont++;
  //   printf("Digite um número: ");
  //   scanf("%d", &num);
  //   if (num > maior)
  //   {
  //     maior = num;
  //   };

  // } while (cont < 5);
  // printf("O maior número digitado foi o: %d\n", maior);

  //diferenças for = mostra 0
  //do...while = vai mostrar o 0
  //while = NÃO vai mostrar o 0
  int num;
  printf("FOR Digite um número: ");
  scanf("%d", &num);
  printf("FOR número lido foi = %d\n\n", num);
  for (num = num; num != 0; num = num)
  {
    printf("\nFOR Digite um número: ");
    scanf("%d", &num);
    printf("FOR número lido foi = %d\n\n", num);
  }

  //*** DO while ***
  printf("DO Digite um número: ");
  scanf("%d", &num);
  printf("DO número lido foi = %d\n\n", num);
  do
  {
    printf("DO Digite um número: ");
    scanf("%d", &num);
    printf("DO número lido foi = %d\n\n", num);
  } while (num != 0);

  //*** WHILE ***
  printf("WHILE Digite um número: ");
  scanf("%d", &num);
  while (num != 0)
  {
    printf("WHILE número lido foi = %d\n\n", num);
    printf("WHILE Digite um número: ");
    scanf("%d", &num);
  }

  return 0;
}