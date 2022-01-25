//Matrizes
// int matriz[Linhas][Colunas] = {{1,2}, {3,4}, {5,6}}
// matriz[0,0] = 1
// matriz[1,1] = 4
// matriz[2,1] = 6


//******************
//Atividade 1: Faça um algoritmo que leia dados inteiros e armazene-os em uma matriz 3x4. Em seguida, mostre a quantidade de números pares e ímpares armazenados na matriz.
//******************

// #include <stdio.h>

// int main(){
//   const int linhas=3, colunas=4;
//   int par=0, impar=0;
//   int matriz[linhas][colunas];

//   for(int i = 0; i < linhas; i++){
//     for(int j = 0; j < colunas; j++){
//       printf("Digite um número p/ Elemento[%d][%d]: ", i, j);
//       scanf("%d", &matriz[i][j]);
//       if(matriz[i][j] % 2 == 0){
//         par++;
//       } else {
//         impar++;
//       }
//     }
//   }

//   printf("Na matriz contém %d números pares e %d impares.\n", par, impar);
//   return 0;
// }



//******************
//Atividade 2: Faça um algoritmo que leia números inteiros e armazene-os na matriz 4x4. Porém, na diagonal principal, não armazene o número lido, e sim um 0 (zero).
//******************

// #include <stdio.h>

// int main(){
//   const int linha=4, colunas=4;
//   int matriz[linha][colunas];

//   for(int i=0; i<linha; i++){
//     for(int j=0; j<colunas; j++){
//       int tmp;
//       printf("Digite um número p/ Elemento[%d][%d]: ", i, j);
//       scanf(" %d", &tmp);
//       if(i != j){
//         matriz[i][j] = tmp;
//       } else{
//         matriz[i][j] = 0;
//       }
//     }
//   }

//   //imprime matriz
//   printf("Matriz[%d][%d]\n", linha, colunas);
//   for(int i=0; i<linha; i++){
//     printf("\n%d %d %d %d\n", matriz[i][0], matriz[i][1], matriz[i][2], matriz[i][3]);
      
//     }

//   return 0;
//   }




//******************
// Atividade 3: Faça um algoritmo que leia uma matriz 4x4 de números inteiros. Gere uma segunda matriz, na qual as linhas são as colunas da matriz 1, e as colunas são as linhas da matriz 1.
//******************

// #include <stdio.h>

// int main(){
//   int matriz1[4][4], matriz2[4][4];
//   int contador=0;
  
//   //cria a Matriz1
//   for(int i=0; i<4; i++){
//     for(int j=0; j<4; j++){
//       matriz1[i][j] = contador;
//       contador++;
//     }
//   }
//   //Imprime a Matriz1
//   printf("\nMatriz1\n");
//   for(int i=0; i<4; i++){
//     printf("Linha %d: %d %d %d %d\n", i, matriz1[i][0], matriz1[i][1], matriz1[i][2], matriz1[i][3]);
//   }
// //Cria matriz2 invertendo LinhaXColuna
//   for(int i=0; i<4; i++){
//     for(int j=0; j<4; j++){
//       matriz2[j][i] = matriz1[i][j];
//     }
//   }

// //Imprime Matriz2
//   printf("\nMatriz2\n");
//   for(int i=0; i<4; i++){
//     printf("Linha %d: %d %d %d %d\n", i, matriz2[i][0], matriz2[i][1], matriz2[i][2], matriz2[i][3]);
//   }

// return 0;
// }

#include <stdio.h>

int main(){
  int a, *b, c;
  a = 5;
  b = &a;
  c = 10;
  scanf("%d", b);
  printf("%d %d\n", a, c);
}