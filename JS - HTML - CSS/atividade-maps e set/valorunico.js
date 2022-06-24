const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valorUnico(array) {
  const meuSet = new Set(array);

  return [...meuSet];
}

console.log(valorUnico(myArray));