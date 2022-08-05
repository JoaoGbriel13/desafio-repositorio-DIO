package br.com.dio.exercicios.arrays;

import java.util.Scanner;

public class OrdemInversa {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);


        int[] vetor = {0 , 2 , 7 , 28 , 55 , 12};

        System.out.println("Vetor: ");
        int count = 0;
        while (count < vetor.length){
            System.out.println(vetor[count]);
            count++;
        }

        System.out.println("\nVetor: ");
        for (int i = (vetor.length-1); i >= 0; i-- ){
            System.out.println(vetor[i] + " ");
        }
    }
}
