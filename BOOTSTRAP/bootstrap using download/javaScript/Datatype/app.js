let name = "priya";
console.log(name); //priya

//primitive data types
//non primitive data types


//primitive data types
//string
let name1 = "john";
console.log(name1); //john
//number
let age = 30;
console.log(age);
//boolean
let isStudent = true;
console.log(isStudent);
//Undefined 
let address;
console.log(address); //undefined
//null 
let city = null;
console.log(city); //null
//bigint
let bigIntVolue = 12345678901234567890n;
console.log(bigIntVolue);
//12345678901234567890n;
console.log(typeof bigIntVolue);
//symbol //unique and immutable data type
let sym1 = Symbol("sym");
let sym2 = Symbol("sym");
console.log(sym1);
console.log(sym2);
console.log(sym1 === sym2);//false


//non_primitive datatypes
//object //values are stored in key-value pairs
let person = {
    name: "Alice",
    age: 25,
    isStudent: false
};
console.log(person);
