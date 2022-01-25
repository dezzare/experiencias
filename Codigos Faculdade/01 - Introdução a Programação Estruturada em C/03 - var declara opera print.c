#include <stdio.h>

int main()
{

  int a, b, c;
  // a = 1 + c; não funciona c não foi declarado ainda
  a = 2;
  b = a + 1;
  c = 10;

  printf("\na = %d, b = %d, c = %d.\n", a, b, c);

  return 0;
}