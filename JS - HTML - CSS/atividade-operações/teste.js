// Solução 1 :

function verificarPalindromo(string) {
  if(!string) return "Coloque uma palavra!";

  return string.split("").reverse().join("") === string;
}

console.log(verificarPalindromo("ana"))

// Solução 2 : 

function verificarPalindromo2(string) {
  if(!string) return "Coloque uma palavra!"

  for(let i = 0; i < string.length / 2; i++) {
    if(string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(verificarPalindromo2("abbbbba"))