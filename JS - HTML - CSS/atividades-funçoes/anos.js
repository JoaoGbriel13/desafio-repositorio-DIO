function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
  nome : "João",
  idade : 22
}

const pessoa2 = {
  nome : "Alberto",
  idade : 28,
}

const pessoa3 = {
  nome : "Pietra",
  idade : 37,
}


// Metodo apply : 
Console.log(calculaIdade.apply(pessoa3, [30]));

// Metodo Call :
console.log(calculaIdade.call(pessoa2, 37));

