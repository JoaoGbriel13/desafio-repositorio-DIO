var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
  if(currentNumber >= 0) { 
    document.getElementById('currentNumber').style.color = "green";
  }
  if(currentNumber <= 9) {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
  }
  else{
    currentNumber = currentNumber + 0
    currentNumberWrapper.innerHTML = currentNumber;
  }

}

function decrement() {
  if(currentNumber <= 0 ){
    document.getElementById('currentNumber').style.color = "red";
  }
  if(currentNumber >= -9){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber; 
  }
  else{
    currentNumber = currentNumber - 0;
    currentNumberWrapper.innerHTML = currentNumber;
  }

}




  

