//to declare number:-
const money = new Number(100); //JS auto detect it as number
//console.log(money);

const score = new Number(900); //explicitly declaring using number function

//Notes: - its shows in the key-value pair(number) & it has less method

//Practical example:-
console.log(score.toString().length); //its converted into string so string methods are also avaiable to use
console.log(score.toFixed(2)); //this shows the precesion value( decimal number till (2 digits), majorly used in e-comerce website to show large datas in fixed precesion value as client dont usually see large datas)
const otherNumber = 89.65434
console.log(otherNumber.toPrecision(3)); //it gave the precise value of a number till the mention digit

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //it add commas to the no. acc to international system.

//to convert to Indian system:-
console.log(hundreds.toLocaleString('en-IN'));
//Notes:- check MDN docs for other standards

//for competetive programming and DSA:-(other methods)
//.MAX_VALUE
// .MIN_VALUE
// .MAX_SAFE_INTEGER
// .MIN_SAFE_INTEGER

// ++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(5.6));
console.log(Math.ceil(9.4));
console.log(Math.floor(4.9));
console.log(Math.max(4, 9, 89, 65));
console.log(Math.min(-3, 98, 67, 54));

console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)