#include <stdio.h>

int main() {

  int annee;
  printf("Entrez une annee");
  scanf("%d", &annee);
  if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0) {
    printf("Bissextile");
  } else {
    printf("Pas Bissextile");
  }
  return 0;
}