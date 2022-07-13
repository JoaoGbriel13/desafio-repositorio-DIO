function changeMode() {
  changeClass()
  changeText()
}
  
  
function changeClass() {
  bodyJS.classList.toggle('dark-mode')
  h1JS.classList.toggle('dark-mode')
  buttonJS.classList.toggle('dark-mode')
  footerJS.classList.toggle('dark-mode')
}

function changeText(){
  if(bodyJS.classList.contains('dark-mode')){
    buttonJS.innerHTML = "Light Mode";
    h1JS.innerHTML = `Dark Mode ON`;
    return;
  }

  buttonJS.innerHTML = "Dark Mode"
  h1JS.innerHTML = "Light Mode ON"
}

const bodyJS = document.getElementsByTagName('body')[0]
const h1JS = document.getElementById('page-title')
const footerJS = document.getElementsByTagName('footer')[0]
const buttonJS = document.getElementById('mode-selector')



buttonJS.addEventListener('click', changeMode)






