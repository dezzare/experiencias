#include <stdio.h>

int main()
{
  float a;
  a = 12.5;
  printf("float a = %f, ou %lf, ou %.2f, ou %.1e, ou %E.\n", a, a, a, a, a, a);

  int b;
  b = 10;
  printf("int b = %d, ou %i, octa %o, hex %x, hex %X, %hd, %ld, %hu, %u, %lu.\n", b, b, b, b, b, b, b, b, b, b);

  puts("Hello World");

  return 0;
}