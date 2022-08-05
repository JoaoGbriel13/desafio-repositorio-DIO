package br.com.dio.exercicios.loops;

import java.util.Scanner;

public class ParOuImpar {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int quantNumeros;
        int numero;
        int pares = 0;
        int impares = 0;

        System.out.println("Quantidade de números: ");
        quantNumeros = scan.nextInt();

        int counter = 0;

        do {
            System.out.println("Numero : ");
            numero = scan.nextInt();

            if(numero % 2 == 0) pares++;
            else impares++;

            counter = counter + 1;


        }while (counter < quantNumeros);
        System.out.println("Quantidade de numeros pares: " + pares);
        System.out.println("Quantidade de numeros impares: " + impares);
    }
}
