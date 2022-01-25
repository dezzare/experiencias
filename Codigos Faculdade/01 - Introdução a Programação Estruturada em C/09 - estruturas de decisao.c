#include <stdio.h>

int main()
{
  int cadastrado, ativo, logado;
  char opcao;
  cadastrado = ativo = logado = 0;

  printf("Deseja cadastrar sua conta? S/N \n");
  scanf(" %c", &opcao);

  if (opcao == 'S' || opcao == 's')
  {
    cadastrado = 1;
    printf("Conta cadastrada.\n");
  }

  printf("Deseja ativar sua conta? S/N \n");
  scanf(" %c", &opcao);

  if (opcao == 'S' || opcao == 's')
  {
    ativo = 1;
    printf("Conta ativada.\n");
  }

  printf("Deseja logar sua conta? S/N \n");
  scanf(" %c", &opcao);

  if (opcao == 'S' || opcao == 's')
  {
    logado = 1;
    printf("Logado.\n");
  }

  if ((cadastrado == 1) && (ativo == 1) && (logado == 1))
  {
    printf("\nSeja bem vindo\n");
  }
  else
  {
    printf("\nAlgo deu errado.\n");
  }
  return 0;
}