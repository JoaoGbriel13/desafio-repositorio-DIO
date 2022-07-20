import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit {
  @Input() CorDeFundo: string = 'yellow';
  @Input() CorDoTexto : string = 'white';

  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {
    this.mudarFundo();
  }

  private mudarFundo(cor: string = 'yellow') {
    this.elemento.nativeElement.style.backgroundColor = this.CorDeFundo || cor;
    this.elemento.nativeElement.style.color = this.CorDoTexto;
    this.elemento.nativeElement.style.fontWeight = 'bold'
  } 

}
