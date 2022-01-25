#include <stdio.h>

int main()
{
  //conta numero de aparições em uma frase
  char letra;
  int contA = 0, contE = 0, contI = 0, contO = 0, contU = 0;

  printf("Digite uma frase e tecle ENTER: \n");
  scanf("%c", &letra);

  while (letra != '.')
  {
    switch (letra)
    {
    case 'a':
      contA++;
      break;

    case 'e':
      contE++;
      break;

    case 'i':
      contI++;
      break;

    case 'o':
      contO++;
      break;

    case 'u':
      contU++;
      break;
    }
    scanf("%c", &letra);
  }
  printf("Total de a: %d \n", contA);
  printf("Total de e: %d \n", contE);
  printf("Total de i: %d \n", contI);
  printf("Total de o: %d \n", contO);
  printf("Total de u: %d \n", contU);
  return 0;
}