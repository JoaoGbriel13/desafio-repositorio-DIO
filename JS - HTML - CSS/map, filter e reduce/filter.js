function numerosPares(array) {
  return array.filter(function(item){
    return item % 2 === 0
  });
}
function filtraImpares(array) {
  return array.filter(function(item){
    return item % 2 !== 0 
  })
}
const nums = [1,2,5,6,7,9,10,26,38,48,50];

console.log(numerosPares(nums));
console.log(filtraImpares(nums));