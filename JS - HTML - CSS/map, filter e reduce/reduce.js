function somaTudo(array) {
 return array.reduce(function(prev, current){
    return prev + current;
  });
};

const numeros = [1,2,4,5,8];

console.log(somaTudo(numeros));