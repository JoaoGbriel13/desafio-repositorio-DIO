function getAdms(map) {
  let admin = [];
  for([key, value] of map){
    if (value === 'admin') {
      admin.push(key);
    }
    
    
    
  };
  return admin;
}

function getGuests(map) {
  let guests = [];
  for([key, value] of map) {
    if(value === "guest") {
      guests.push(key);
    }
  }
  return guests;
}  


const map = new Map();
map.set('Joao' ,  'admin');
map.set('Carlos', 'user');
map.set('Roberta', 'admin');
map.set('Carla' , "guest");
map.set('Alberto', "guest");
map.set ('Rubio', "admin")

console.log(getAdms(map));
console.log(getGuests(map));

