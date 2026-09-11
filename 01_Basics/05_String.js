//To declare a string
const name = "Ruprekha";
const repoCount = 4;

//Concatenation - outdated
//console.log(name + repoCount + "Value");

//Backticks(`) - string interpolation(to create a place holder)
//console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

//To declare a string in new way
const accName = new String('Ruprekha-RS-com');

//string are shown as key-value pair(object) in console

//methods:-
console.log(accName[0]); //to access the char at that index
console.log(accName.__proto__); //it shows empty object

console.log(accName.length); //no. of char
console.log(accName.toUpperCase());
console.log(accName.charAt(3)); //to get the char at that index

console.log(accName.indexOf('a')); //get the index of particular char

const newString = accName.substring(0,4); //4 is not included
console.log(newString);

const newSlicing = accName.slice(-8, 4); //backward priting is only allowed in slicing
console.log(newSlicing);

const newStrOne = "   rup   ";
console.log(newStrOne);
console.log(newStrOne.trim()); //it trimes the extra whitespaces from a character -> it had strat and end trim as well

const url = "https://ruprekha.com/ruprekha%50singha"; //url convert the whitespace into no. & %

console.log(url.replace('%50','-')); 

console.log(url.includes("sin")); //checks the char is present or not

console.log(accName.split('-')); //it convert string into array and split in the basis of -












