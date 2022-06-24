const lista = [
  {
    nome : "Ghosts of Tsushima",
    valor : 250,
  },
  {
    nome : "Fifa 22",
    valor : 35,
  },
  {
    nome : "Need for Speed",
    valor : 27,
  },
  {
    nome : "Valorant",
    valor : 100,
  },
];

const carteira = 750;

function saldoFinal(carteira, lista) {
  return lista.reduce(function(prev, current){
    return prev - current.valor;
  }, carteira);
}



console.log(`Seu saldo final é de ${saldoFinal(carteira,lista)} reais`);