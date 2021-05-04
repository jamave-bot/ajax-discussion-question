const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

let btn = document.querySelector('button');

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  let fullname = document.getElementById('fullname');


  btn.addEventListener('click', ()=>{

    getName();
  })
});


function getName(){
  fetch('https://randomuser.me/api/')
    .then(data => data.json())
    .then(json => json["results"][0]["name"]["title"] + " " + json["results"][0]["name"]["first"] + " " + json["results"][0]["name"]["last"] )
    .then(test => fullname.innerText= test)
}