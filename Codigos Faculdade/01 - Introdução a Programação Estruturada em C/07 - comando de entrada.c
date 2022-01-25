#include <stdio.h>

int main()
{
  int numero;
  printf("Digite um número inteiro:\n");

  scanf("%d", &numero);

  printf("O número digitado foi %d\n", numero);

  float dividendo, divisor;
  printf("Digite dois numeros: \n");
  scanf("%f %f", &dividendo, &divisor);
  printf("A divisão de %.2f por %.2f é: %.2f\n", dividendo, divisor, dividendo / divisor);

  return 0;
}