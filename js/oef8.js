"use strict"; 

function capitalizeEersteLetter(woord){
    woord = woord.trim(); 
    
    let capitalizeEersteLetter = (woord.slice(0).toUppercase() + woord.slice(1));
   
   
    console.log(capitalizeEersteLetter);
}

let name1 = 'mike derycke';
let name2 = 'max power';
let name3 = 'judas de verrader';

capitalizeEersteLetter(name1); 
capitalizeEersteLetter(name2); 
capitalizeEersteLetter(name3);
