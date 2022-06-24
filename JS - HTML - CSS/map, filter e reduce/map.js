const maça = {
  valor : 2,
};

const banana = {
  valor : 4,
};

function comThis(array, thisArg) {
  return array.map(function(item) {
    return item * this.valor;
    
  }, thisArg);
}


const numeros = [1,2,3,4,5,6,7] ;


console.log(comThis(numeros, maça));
console.log(comThis(numeros, banana));