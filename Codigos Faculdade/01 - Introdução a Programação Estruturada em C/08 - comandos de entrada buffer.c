#include <stdio.h>

int main()
{
  char letra1, letra2;

  printf("Entre com duas letras:\n");
  scanf("%c", &letra1);
  scanf(" %c", &letra2); //necessário espaço p/ ignorar o buffer teclado "enter"
  printf("As letras inseridas foram %c e %c.\n", letra1, letra2);

  char letra3, letra4;

  printf("Entre com uma letras:\n");
  scanf(" %c", &letra3); //espaço para ignorar o enter no buffer

  fflush(stdin);   // Windows = limpa buffer do teclado
  __fpurge(stdin); // linux = limpa buffer teclado

  printf("Digite outra letra\n");
  scanf("%c", &letra4);
  printf("As letras inseridas foram %c e %c.\n", letra3, letra4);

  return 0;
}