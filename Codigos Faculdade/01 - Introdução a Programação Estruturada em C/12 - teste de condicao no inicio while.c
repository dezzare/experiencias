#include <stdio.h>

int main()
{
  //ler uma seq n int, terminada em 0 e mostre tdos (exceto 0)
  //for não é indicado, não sabe quantos n serão lidos antes do 0
  //pode haver somente o 0 e nada precise ser feito
  //while testa a condição antes de iniciar a sequência
  // while (condição) {comandos}

  int num;
  printf("\nDigite um número: ");
  scanf("%d", &num);

  while (num != 0)
  {
    printf("O nº lido foi: %d\n", num);

    printf("\nDigite um número: ");
    scanf("%d", &num);
  };
}