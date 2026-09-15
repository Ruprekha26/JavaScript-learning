//date is a long standing pain point

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString()); //Tue Sep 15 2026 21:27:04 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Tue Sep 15 2026

// console.log(myDate.toISOString()); //2026-09-15T15:57:04.081Z

// console.log(myDate.toJSON()); //2026-09-15T15:57:04.081Z
// console.log(myDate.toLocaleString()); //15/9/2026, 9:27:04 pm
// console.log(myDate.toLocaleDateString()); //15/9/2026

// console.log(typeof myDate); //date is a object

// let myCreatedDate = new Date(2016, 0, 23); //months starts from 0 at JS
// console.log(myCreatedDate.toDateString());

// let anoDate = new Date( 2026, 8, 26, 12, 9);
// console.log(anoDate.toLocaleString());

let createDate = new Date("09-26-2026")
// console.log(createDate.toLocaleString());


let myTimeStamp = Date.now(); //new syntax, used for designing quiz, to decalre winner of contest
// console.log(myTimeStamp);
// console.log(createDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //To convert it into seconds(asked in interview)

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);

//Important:-
newDate.toLocaleString('default', {
    weekday:"long",
})









