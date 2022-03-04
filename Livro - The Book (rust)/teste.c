Considere o algoritmo na  linguagem C:

main(){

  char[20] nome;
  char sexo;
  printf("Qual é o seu nome?");

  scanf(nome);

  printf ("Qual é o seu sexo? (f/m) ");

  scanf (&sexo);           
  if (sexo == 'f' && sexo == 'F')
    printf("Você é do sexo feminino. ");
  else
  if (sexo == 'm' && sexo == 'M')
    printf("Você é do sexo masculino. ");
  else
    printf ("Você digitou um valor de sexo invalido ");

}

 

Sobre o algoritmo acima é correto afirmar que: