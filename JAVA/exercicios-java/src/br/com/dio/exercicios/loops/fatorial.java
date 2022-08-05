package br.com.dio.exercicios.loops;

import java.util.Scanner;

public class fatorial {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite o numero a ser fatorado: ");
        int fatorial = scan.nextInt();
        int multiplicar = 1;

        System.out.println(fatorial +"! = ");

        for(int i = fatorial; i >= 1; i--){
            multiplicar = multiplicar * i;
        }
        System.out.println(multiplicar);
    }
}
