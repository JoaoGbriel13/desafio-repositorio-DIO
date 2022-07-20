import { Component, OnInit } from '@angular/core';
import { Pessoas } from '../pessoas/pessoas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  valor !: number;
  exibirTabela : boolean = false;

  listaPessoas : Pessoas[] = [
    {nome : 'João', email: "joaoglima@hotmail.com", idade: 22},
    {nome : "Adalberto", email: "dasilvaada@hotmail.com", idade: 33},
    {nome : "Carlos", email: "car@hotmail.com", idade: 33}
  ]

  ngOnInit(): void {
    this.valor = 0;
  }

  mudarValor(){
    this.valor++
  }
  diminuirValor(){
    this.valor--
  }
  reiniciarValor(){
    this.valor = 0
  }      

  abrirTabela() {
    this.exibirTabela = true
}
}