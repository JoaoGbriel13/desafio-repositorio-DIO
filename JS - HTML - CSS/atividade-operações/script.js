function compare(num1 , num2) {
 if(!num1 || !num2) return "Você precisa de dois numeros validos!";
 
 
 const primeiraFrase = criaPrimeiraFrase(num1, num2);
 const segundaFrase = criaSegundaFrase (num1, num2);

 return `${primeiraFrase} ${segundaFrase}`; 
}

function criaPrimeiraFrase(num1, num2) {
  let saoIguais = ""

  if(num1 !== num2) {
    saoIguais = "não";
  }

  return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
};

function criaSegundaFrase(num1, num2) {
  const soma = num1 + num2;
  let result10 = "menor";
  let result20 = "menor";
  
  const comparar10 = soma > 10;
  const comparar20 = soma > 20;

  if(comparar10) {
    result10 = "maior";
  }

  if(comparar20) {
    result20 = "maior";
  }

  return `Sua soma é ${soma}, que é ${result10} que 10 e ${result20} que 20.`
}

console.log(compare(a, 10))  
