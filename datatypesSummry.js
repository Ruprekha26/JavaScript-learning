//Datatypes are divided into two types:-
//Primitive - pass by value(  values whose copy are allocated )
//Non-primitive - pass by reference( values whose refernce are allocated)
//dataypes are divided by how a dataypes are store in memoery and how can be accessed

//Primitive: 7 types :-> string, number, boolean, null, undefined, BigInt, Symbol( used for uniqueness)

//Uses:-
//  //undefined is assign

//Symbol
let id = Symbol('123');
let anotherId = Symbol('123')

console.log(id === anotherId);
//== :- checks value
//=== :- checks value and datatype

const bigNumber = 7877896530976n; //bigInt

//Non-Primitive( Reference ) : Array, Object, Function

//Array
const Movies = ["Vivaah", "Hum sath sath hain", "Hum apke hain kon"];

//Object are represent in key-value pair
let obj ={
    name : "Ruprekha",
    age : 20,
}

//function
const myFunction = function(){
    console.log("Helloooo");  
}

//typeof:-
// Undefined - "undefined"
//Null - object
//else same as there datatype
