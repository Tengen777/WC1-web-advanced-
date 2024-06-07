'use strict';
alert("Hello World") // oefening 1

// oefening 2
let a = 10; 
a = a+5;
console.log(a);

// oefening 3
let leeftijd = prompt("wat is je leeftijd");

    if (leeftijd > 18){
        console.log("welkom");

    } else {
        console.log("No entry");
    }

// oef4
function controleLeeftijd(){

let leeftijd = document.getElementById('leeftijd').value;
  if(leeftijd < 18){
    console.log('Je bent te jong');
  }else{
    console.log('Welkom');
  }
}

form.addEventListener('submit', controleerLeeftijd);