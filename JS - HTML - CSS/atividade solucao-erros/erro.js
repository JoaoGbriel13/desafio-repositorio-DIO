function validarArray(array, num) {
  try{
    if(!array && !num) throw new ReferenceError("Envie os parametros");
    if(typeof array !== "object") throw new TypeError('O array precisa ser um objeto!');
    if(typeof num !== 'number') throw new TypeError("Você precisa digitar um número!");
    if(array.length !== num) throw new RangeError("O array é invalido!");
    return array;
  }catch(e){
      
    if(e instanceof ReferenceError){
      console.log("Este erro é um ReferenceError!");
      console.log(e.message);
      
    } else if(e instanceof TypeError){
      console.log("Este é um TypeError!");
      console.log(e.message);
    }else if(e instanceof RangeError){
      console.log("Este é um RangeError!");
      console.log(e.message);
    }else{
      console.log(`Este é um erro desconhecido ${e}`);
    }

  }

  }

  console.log(validarArray([1,2,3,4,5], 5))





