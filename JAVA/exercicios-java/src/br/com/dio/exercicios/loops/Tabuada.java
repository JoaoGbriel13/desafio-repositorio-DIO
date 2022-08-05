package br.com.dio.exercicios.loops;

import java.util.Scanner;

public class Tabuada {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int multiplicador;

        System.out.println("Qual o numero multiplicador? ");
        multiplicador = scan.nextInt();

        System.out.println("A tabuada de é : " + multiplicador);

        for (int i = 1 ; i <= 10 ; i++ ){
            System.out.println(multiplicador + " x " + i + " = " + (multiplicador * i));
        }

    }
}
