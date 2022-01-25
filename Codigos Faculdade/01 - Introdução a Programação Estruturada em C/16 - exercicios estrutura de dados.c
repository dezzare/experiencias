#include <stdio.h>

int main()
{

  //Atividade 1: ler 100 numero e registrar em ordem inversa
  // int numerosInvertidos[100];
  // for (int i = 1, j = 99; i <= 100; i++, j--)
  // {
  //   numerosInvervoido %d na posição %d\n", i, j);
  // }
  // // printf("n[0] = %d\nn[99] = %d\n", numerosInvertidos[0], numerosInvertidos[99]);
  //
  // // //tentativa de ler 100 numeros, registrar na ordem, imprimir em ordem inversa
  // // //aproveitaando a variável com ordem invertida (numerosInvertidos)
  // for (int i = 99; i >= 0; i--)
  // {
  //   printf("Número %d\n", numerosInvertidos[i], i);
  // }
  // //  // // // // // // // //  // //  // // // // // // // //
  // forma reduzida, aumento para 1.000.000,  ver performace
  // time ./a.out  0,52s user 1,23s system 22% cpu 7,895 total
  // int numerosInvertidos[1000000];
  // for (int i = 1; i <= 1000000; i++)
  // {
  //   numerosInvertidos[i - 1] = i;
  // }
  // for (int i = 999999; i >= 0; i--)
  // {
  //   printf("Número %d\n", numerosInvertidos[i]);
  // }
  //
  //
  // // // // // // // // // // // // // // // // // // // // // //
  //Atividade 2: ler 10 notas de alunos e mostrar quais são iguais ou superior a media da turma
  float notas[10], media, total;
  for (int i = 0; i < 10; i++)
  {
    printf("Digite a nota nº %.1f: ", (i + 1));
    scanf("%f", &notas[i]);
    total = total + notas[i];
  }

  media = total / 10;
  printf("A média da turma é: %.2f\n", media);

  for (int i = 0; i < 10; i++)
  {
    if (notas[i] >= media)
    {
      printf("Posição %d teve nota superior ou maior que a média, com %.2f pontos\n", i, notas[i]);
    }
  }

  return 0;
}
