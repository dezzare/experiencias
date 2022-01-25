#include <stdio.h>

int main()
{
  //primeiro e segundo ex = forma singular, repetição de cógido = inviável
  // primeiro exemplo, ler 3 notas e calcular media
  float nota1, nota2, nota3, media;
  printf(" nota 1 = ");
  scanf("%f", &nota1);

  printf(" nota 2 = ");
  scanf("%f", &nota2);

  printf(" nota 3 = ");
  scanf("%f", &nota3);

  media = (nota1 + nota2 + nota3) / 3;

  printf("média = %.2f", media);

  //segundo exemplo, colocar se aluno foi aprovado ou nao (media 7)
  if (media >= 7)
    printf(" , Aluno aprovado\n");
  else
    printf(" , Aluno Reprovado\n");

  //alternativa = estrutura de repetição com variável de controle.
  //  repete sequencia/bloco por um número X de vezes.
  //  no javascript é fácil for (let i = 0; i < X; i++){}
  //    aparentemente em C é a mesma coisa...
  //  FOR (inicialização; condição; incremento/decremento)
  //    inicialização = variavel de controle
  //    condição = expressão relacional
  //    se V ocorre, se F não ocorre e segue o comando após rep
  //    sequência de comandos após a repetição
  //  DUVIDA; pesquisar se C há limitação de escopo como no JS

  int soma; //testando p/ ver limitação escopo

  for (int cont = 1; cont <= 10; cont++)
  {
    int escopo;
    escopo = escopo + 1; //teste escopo
    soma = soma + cont;  //teste escopo
    printf("A soma dos números entre 1 e %d = %d\n", escopo, soma);
  }
  printf("A soma dos números entre 1 e 10 = %d\n", soma);
  // printf("A soma dos números entre 1 e 10 = %d\n", escopo); não funciona

  return 0;
}