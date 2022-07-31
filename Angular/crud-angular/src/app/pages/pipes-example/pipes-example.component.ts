import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number : number = 0;
  text : string = 'Hello World';
  date = new Date;
  pessoa = {
    nome : 'João',
    idade : 22, 
    profissão : 'Desenvolvedor'
  }

  nomes = ['Joao']
  
  
  constructor() { }
  
  ngOnInit(): void {
  }

  mudaValor() {
    this.number = 123488;
  }

  add(text : string) {
    this.nomes.push(text);
  }


}
