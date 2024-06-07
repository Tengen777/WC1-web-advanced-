"use strict"; 

function capitalizeEersteLetter(woord){
    woord = woord.trim(); 
    let woord = woord.split(" ");
    
    for (let part in woord){
        
     woord[part] = (woord[part].slice(0).toUppercase() + woord[part].slice(1));
   }
   
    console.log(capitalizeEersteLetter);
}

let name1 = 'mike derycke';
let name2 = 'max power';
let name3 = 'judas de verrader';

capitalizeEersteLetter(name1); 
capitalizeEersteLetter(name2); 
capitalizeEersteLetter(name3);
