"user strict"
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const day = today.getDate();
const month = months[today.getMonth()];
const year = today.getFullYear();


const today = new Date();

console.log(`${day} ${month} ${year}`);