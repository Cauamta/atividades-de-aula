# atividades-de-aula
#include <stdio.h>

int main() {
  int cod_livro1=20;
  int cod_livro2=15;
  int cod_livro3=30;
  int cod_livro1_desejado=0;
  int cod_livro2_desejado=0;
  int cod_livro3_desejado=0;

  printf("digite o codigo do livro1");
  scanf("%d", &cod_livro1_desejado);
  if(cod_livro1 == cod_livro1_desejado) {
      printf("Livro 1 disponivel para emprestimo.\n");
  } else {
      printf("Livro 1 nao esta disponivel para emprestimo.\n");
  }
  printf("digite o codigo do livro2");
  scanf("%d", &cod_livro2_desejado);

  if(cod_livro2 == cod_livro2_desejado) {
      printf("Livro 2 disponivel para emprestimo.\n");
  } else {
      printf("Livro 2 nao esta disponivel para emprestimo.\n");
  }
  printf("digite o codigo do livro3");
  scanf("%d", &cod_livro3_desejado);
  
  if(cod_livro3 == cod_livro3_desejado) {
      printf("Livro 3 disponivel para emprestimo.\n");
  } else {
      printf("Livro 3 nao esta disponivel para emprestimo.\n");
  }
  }
