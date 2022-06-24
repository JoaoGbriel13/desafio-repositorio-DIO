function semThis(array) {
 return array.map(function(item) {
  return item * 7
  });
}

const nums = [1,5,8,16,24,48]

console.log(semThis(nums));