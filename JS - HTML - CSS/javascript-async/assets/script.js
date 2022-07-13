const BASE_URL = "https://thatcopy.pw/catapi/rest"
const imgGato = document.getElementById('change-cats')
const button = document.getElementById('botao')

const getCats = async () => {
  try{
    const data = await fetch(BASE_URL);
    const json = await data.json();
  
    return json.webpurl;
  } catch(e){
    console.log(e.message);

  }
}
  
const loadIMG = async () => {
  imgGato.src = await getCats();
};

button.addEventListener("click", loadIMG);

loadIMG();