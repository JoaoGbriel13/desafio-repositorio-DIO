const meusBotoes = document.querySelectorAll('[numero]')
const meusOperadores = document.querySelectorAll('[operadores]')
const resetarButton = document.querySelector('[clear]')
const resetarTudo = document.querySelector('[all-clear]')
const igualButton = document.querySelector('[igual]')
const numeroAnteriorTexto = document.querySelector('[numero-anterior]')
const numeroAtualTexto = document.querySelector('[numero-atual]')

class Calculadora {
  constructor(numeroAnteriorTexto, numeroAtualTexto) {
    this.numeroAnteriorTexto = numeroAnteriorTexto
    this.numeroAtualTexto = numeroAtualTexto
    this.clear()
  }
  
  
  
  
  resetarButton(){
    this.numeroAtual = this.numeroAtual.toString().slice(0, -1)
  }

  escolherOperacao(operador) {
    if(this.numeroAtual === "") return;
    
    
    if (this.operador !== '') {
      this.calcule()
    }

    this.operador = operador

    this.numeroAnterior = this.numeroAtual
    this.numeroAtual = ''
  }

  receberNumero(number) {
    if (this.numeroAtual.includes(',') && number === ',') return
    
    

    this.numeroAtual = `${this.numeroAtual}${number.toString()}`
  }

  calcule() {
    let resultado

    const numeroAnteriorFloat = parseFloat(this.numeroAnterior)
    const numeroAtualFloat = parseFloat(this.numeroAtual)

    if (isNaN(numeroAnteriorFloat) || isNaN(numeroAtualFloat)) return

    switch (this.operador) {
      case "+":
        resultado = numeroAnteriorFloat + numeroAtualFloat;
        break;
      case "-":
        resultado = numeroAnteriorFloat - numeroAtualFloat;
        break;
      case "*" :
        resultado = numeroAnteriorFloat * numeroAtualFloat;
        break;
      case "/" :
        resultado = numeroAnteriorFloat / numeroAtualFloat;
        break;
        default:
          return
     }

    this.numeroAtual = resultado;
    this.operador = undefined;
    this.numeroAnterior = "";
  }




  clear() {
    this.numeroAtual = ''
    this.numeroAnterior = ''
    this.operador = undefined
  }

  atualizarDisplay() {
    this.numeroAnteriorTexto.innerText = `${this.numeroAnterior} ${
      this.operador || ''
    }`
    this.numeroAtualTexto.innerText = this.numeroAtual
  }
}

for (const meuBotao of meusBotoes) {
  meuBotao.addEventListener('click', () => {
    calculadora.receberNumero(meuBotao.innerText)
    calculadora.atualizarDisplay()
    
  })
}

for (const meuOperador of meusOperadores) {
  meuOperador.addEventListener('click', () => {
    calculadora.escolherOperacao(meuOperador.innerText)
    calculadora.atualizarDisplay()
  })
}

const calculadora = new Calculadora(numeroAnteriorTexto, numeroAtualTexto)

resetarTudo.addEventListener('click', () => {
  calculadora.clear()
  calculadora.atualizarDisplay()
})

igualButton.addEventListener('click', () => {
  calculadora.calcule();
  calculadora.atualizarDisplay();
})

resetarButton.addEventListener('click', () => {
  calculadora.resetarButton()
  calculadora.atualizarDisplay()
})
