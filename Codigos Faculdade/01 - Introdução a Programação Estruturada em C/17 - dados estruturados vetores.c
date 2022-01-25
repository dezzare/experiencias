//Dados Estruturados/Compostos
// Forma de Alocação
//   Estáticos = criado/declarado início e mantém até o fim
//     Vetores
//     Registro
//     Matriz
//   Dinâmicos = criado durante execução
//     Ponteiros

// Tipos de Dados
//   Homogêneos
//     Vetores
//     Matrizes
//   Heterogêneos
//     Registros

//Vetores 
//¿DÚVIDA? pode considerar vetores = arrays no JS? 
//Declaração = <tipo dado> <nomeVar> [<quantidade>] = {<valores>}
  // int numeros[3] = {10, 30, 90}
  // float notas[10];
  // char vogais[5];

//C NÃO dispõe de tipo de dado específico p/ armazenar String
  // usar VETOR de caracteres
  // vetor char mais o marcador \0 (scanf só le se for em loop)
  //  char vet[7];
  //   vet[0] = 'e';
  //   vet[1] = 'x';
  //   vet[2] = 'e';
  //   vet[3] = 'm';
  //   vet[4] = 'p';
  //   vet[5] = 'l';
  //   vet[6] = 'o';



//***************************
//Atividade 1: Faça um programa que leia 100 números inteiros e mostre-os na ordem inversa em que foram lidos.
//Nota = ao invés de 100, farei com 5 (para teste)
//***************************

// #include <stdio.h>

// int main(){
//   int numeros[5];
//   int exemplo;
//   for(int i = 0; i < 5; i++){
//     printf("Digite o número da posição %d: ", i+1);
//     scanf("%d", &numeros[i]);
//   }
//   printf("Índice 0 = %d\n", numeros[0]);
//   for(int i=4; i>=0; i--){
//   printf("Vetor números posição %d = %d\n",i+1, numeros[i]);
//   }
// return 0
// }



//***************************
// Atividade 2: Faça um programa que leia a nota de 20 alunos da turma e mostre as que são iguais ou superiores à média da turma.
// Novamente farei com 5 ao invés do número sugerido;
//***************************

// #include <stdio.h>

// int main(){
//   float notas[5];
//   float soma;
//   float media;

//   for(int i = 0; i < 5; i++){
//     printf("Digite a nota do aluno %d: ", i+1);
//     scanf("%f", &notas[i]);
//     soma = soma + notas[i];
//   }
//   media = soma/5;
//   printf("A média da turma é: %.2f\n", media);

//   for(int i = 0; i < 5; i++){
//     if(notas[i] >= media){
//       printf("Aluno %d tem media %.2f e é igual ou superior a media da sala\n", i+1, notas[i]);
//     }
//   }
//   return 0;
// }


//***************************
//Atividade 3: Leia uma sequência de letras, terminada na letra (”z”), e mostre quantas vezes cada vogal (a, e, i, o, u) apareceu.
//na minha opinião o enunciado está mal elaborado.
//dá a entender que será escrito uma string e ao final dela terá uma letra Z.
//todavia, no vídeo, o professor dá outra explicação, falando que será um loop pegando apenas um caractere por vez e p/ encerrar o loop se deve digitar "z".
//ps. após testar diversas soluções, percebi que o scanf trata a palavra como caracteres concatenados e faz um "split" automatico. Não fazendo diferença a interpretação do enunciado.
//***************************

// #include <stdio.h>

// int main(){
//   int numeroVogais[5] = {0,0,0,0,0};
//   char letra;

//   //retirado do while em razão de repetição caso escrever palavra;
//   printf("Digite uma letra: "); 
  
//   while(letra != 'z' && letra != 'Z'){
//     switch(letra){
//       case 'a':
//         numeroVogais[0]++;
//         break;
//       case 'e':
//         numeroVogais[1]++;
//         break;
//       case 'i':
//         numeroVogais[2]++;
//         break;
//       case 'o':
//         numeroVogais[3]++;
//         break;
//       case 'u':
//         numeroVogais[4]++;
//         break;
//     }
//     scanf(" %c", &letra);
//   }

//   printf("\nA vogal 'a' foi digitada %d vezes\n", numeroVogais[0]);
//   printf("A vogal 'e' foi digitada %d vezes\n", numeroVogais[1]);
//   printf("A vogal 'i' foi digitada %d vezes\n", numeroVogais[2]);
//   printf("A vogal 'o' foi digitada %d vezes\n", numeroVogais[3]);
//   printf("A vogal 'u' foi digitada %d vezes\n", numeroVogais[4]);
// return 0;
// }


//***************************
//Atividade 4: Faça um algoritmo que leia 50 números inteiros e armazene-os em um vetor. Copie para um segundo vetor de 50 números inteiros cada elemento do primeiro, observando as seguintes regras:
//    1 - Se o número for par, preencha a mesma posição do segundo vetor com o número sucessor do contido na mesma posição do primeiro vetor.
//    2 - Se o número for ímpar, preencha a mesma posição do segundo vetor com o número antecessor do contido na mesma posição do primeiro vetor.
//  Ao final, mostre o conteúdo dos dois vetores simultaneamente
//***************************

// #include <stdio.h>

// int main(){

//   //possível usar constante:
//   //const int tamanhoVetor=5;
//   //int cinco[tamanhoVetor], copia[tamanhoVetor];
//   int cinco[5], copia[5];

//   //se usar const = trocar 5 por tamanhoVetor
//   for(int i = 0; i < 5; i++){
//     printf("Digite o numero da posição %d: ", i+1);
//     scanf("%d", &cinco[i]);
//     if(cinco[i] % 2 == 0){
//       copia[i] = cinco[i]+1;
//     } else {
//       copia[i] = cinco[i]-1;
//     }
//   }

//   for(int i = 0; i < 5; i++){
//     printf("Posição %d no vetor1 = %d\n", i+1, cinco[i]);
//     printf("Posição %d no vetor2 = %d\n", i+1, copia[i]);
//   }

// return 0;
// }


//***************************
//Atividade 5: Faça um algoritmo que leia 50(5) números inteiros e armazene-os em um vetor.
//    Na sequência, leia uma lista de 10(3) números inteiros e verifique se cada um deles está contido em alguma posição do vetor. Em caso positivo, mostre a posição do vetor em que ele se encontra.

#include <stdio.h>

int main(){
  const int tamVetor=5, tamPesquisa=3;
  int vetor[tamVetor];
  int pesquisaNum;

  for(int i = 0; i < tamVetor; i++){
    printf("Digite o número da posição %d: ", i+1);
    scanf("%d", &vetor[i]);
  }

  for(int i = 0; i < tamPesquisa; i++){
    printf("\nTentativa %d: digite um número p/ procurar: ", i+1);
    scanf("%d", &pesquisaNum);
    int posicao = 0;
    int achou = 0;
    while (posicao < tamVetor && achou ==0){
      if (pesquisaNum == vetor[posicao]){
        achou = 1;
      } else{
        posicao++;
      }
    }
    if (achou==1){
      printf("Achou o número %d na posição %d\n", pesquisaNum, posicao+1);
    } else {
      printf("Não achou o número\n");
    }
  }

return 0;
}