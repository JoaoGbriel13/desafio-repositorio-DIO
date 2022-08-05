package br.com.dio.exercicios.loops;

import java.util.Scanner;

public class Maior_e_Media {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int numero;
        int maior = 0;
        int soma = 0;

        int counter = 0;

        do {
            System.out.println("Digite um numero: ");
            numero = scan.nextInt();

            soma = numero + soma;
            if(numero > maior) maior = numero;

            counter = counter + 1;

        }while (counter < 5);
        System.out.println("Maior: " + maior);
        System.out.println("Media: " + (soma/5));
    }
}
