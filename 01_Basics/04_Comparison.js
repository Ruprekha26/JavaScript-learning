//Basic Conversion:-
console.log( 2 > 0);
console.log( 2 >= 1);
console.log( 2 < 1);
console.log( 2 <= 1);
console.log( 2 == 1);

//On comparing two different datatypes it dont give predictiable result.
//Typescript doesnt allow to compare two diff datatype.
console.log("2" > 1);
console.log("2" >= 1);


//equality check == & comparison operator >= ,<=, >, < works differently because (eg.3)null >= 0 convert the null into 0( a number) so output is true, where as (eg.1) null > 0 is false as it doesnt have = sign with it.
//>= comparison operator -   
// == equality -

//Example:-
console.log( null > 0);
console.log( null == 0);
console.log( null >= 0);


//for undefined, all the output for comparison are false
//Example:-
console.log(undefined > 0);
console.log( undefined == 0);
console.log( undefined >= 0);

//Notes:- Avoid writing this type of code, practice clean and readable code.

//diff syntax of equality check() & comparison operator() works differently.

// === :- its a strict check, it checks the datatypes as well

//Example:-
console.log( "2" === 2);

