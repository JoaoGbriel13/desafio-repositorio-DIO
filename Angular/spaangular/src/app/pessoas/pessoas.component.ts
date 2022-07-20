import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() valorinicial : number = 0

}
