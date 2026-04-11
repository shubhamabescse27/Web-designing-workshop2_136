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
//value of object can be accessed using dot notation or bracket notation
console.log(person.name);//Alice
console.log(person["age"]);//25
//array //ordered collection of values
let numbers = [1,2,3,4,5];
console.log(numbers); //[1,2,3,4,5]
let arr1 = [1, "Hello", "World", 56];
console.log(arr1); //
// array operations
//pus() - adds an element to the end of the array
let arrnew = [1,2,3];
arrnew.push(4);
console.log(arrnew); //[1,2,3,4]

//pop() - removes the lats element from the array
arrnew.pop();
console.log(arrnew); //[1,2,3]
//shift( ) - removes the first element from the array
arrnew.shift();

console.log(arrnew); //[2,3]
//unshift() - adds an element to the beginning of the array
arrnew.unshift(5);
console.log(arrnew);
//for loop on array
for (let i = 0; i< arrnew.length; i++) {
    console.log(arrnew[i]);
}
// for each loop on array // forEach() method executes a provided function

arrnew.forEach (function(element){
    console.log(element);

});
//map() method creates a new array populated with the results of calling array
let squareArr = arrnew.map(function(element) {
    return element * element;
});
console.log(squareArr); //[25 , 4 ,9]
//filter() method creates a new array with all elements that pas the test impleted by the provide unction
let evenArr = arrnew.filter(function(element){
    return element % 2 === 0;
});
console.log(evenArr); //[2]

//reduce() method executes a reducer function (that you provided) on each
let sum = arrnew.reduce(function(accumulator , currentValue) {
return accumulator + currentValue;
} , 0);
console.log(sum); //10
//function //reusable block of code that performs a specific task
function greet() {
    console.log("hello, world!");
}
    greet(); //Hello , world
    //function with parameters
    function greet(name) {
        console.log("Hello, " + name + "!");
    }
    greet("Alice"); //Hello, Alice!
    //function with return value
function add(a,b) {
  return a + b;  
}
let result = add(5, 10);
console.log(result); //15
//function expression can also be defined as an expression and sorted in a variable
let greet2 = function(name) {
    console.log("Hi, " + name + "!");
};
greet2("bob");//Hi, Bob!
//template literals // allows embedded expressions and multi_line strings
let name3 = "Charlie";
let greeting = `Hello, ${name3}!` ;
let greeting2 =    `Hi, ${name3}`;
console.log(greeting); //Hello Charlie!
console.log(greeting2); //Hi , Charlie!