//Task 1 - Create one function which takes one argument and logs the data type of parameter in console.
console.log("--------     Task 1     --------");
function greet(data) {
    console.log(typeof data);
}
greet("Hello");
greet(true);
greet(4);
greet();

//Task 2 - Write a JavaScript program to remove a character at the specified position in a given string and return the modified string. 
console.log("--------     Task 2     --------");
function removeChar(str, position) {
    let a = Array.from(str);
    a.splice(position, 1);//Inseerted the position and how many element to remove
    return a.join('');//return the joined and converted string
}
console.log(removeChar("W3resource", 1));

//Task 3 - Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than 1.
console.log("--------     Task 3     --------");
let array1 = [1, 0, 2, 3, 4];
console.log(array1[0] === 1 || array1[array1.length - 1] === 1);//last element length - 1


//Task 4 - Write a JavaScript program to rotate the elements left in a given array of integers of length any.
console.log("--------     Task 4     --------");
function rotateArray(arr) {
    let a = arr.shift();//removed first element
    arr.push(a);//pushed at last
    return arr;//array return
}
console.log(rotateArray([1, 3, 4, 7, 6]));

//Read and Development
console.log("--------     Read and Development     --------");

//unlimited arguments passing
function sum(...parameters) {
    return parameters;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


//Higher order function
function simpleFunction() {
    console.log("I am simple function")
}
function higherOrderFunction(param) {
    console.log("I am Higher Order Function");
    param();
}
higherOrderFunction(simpleFunction);

//Advanced Higher Order Function
let radius = [1, 2, 3]

let area = function (radius) {
    return (Math.PI * radius * radius).toFixed(2)
}
let diameter = function (radius) {
    return 2 * radius
}

let multiplication = function (radius) {
    return radius * radius
}
let showing = function (radius, logic) {
    let output = [];
    for (i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(showing(radius, area));
console.log(showing(radius, diameter));
console.log(showing(radius, multiplication));

//Map - Map through each element and did whatever logic we write on each element similar like for each & for inloop
let arrayNum = [1, 2, 3, 4, 5];
const output = arrayNum.map((num) => num * 100)
console.log(output)

//1 to 10 printing using map
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numOutput = numbers.map((num) => num)
console.log(numOutput)

//Another way
function oneToTen(x, y) {
    if (x <= y) {
        console.log(x)
        x++;
        oneToTen(x, y);
    }
}
oneToTen(1, 10);


//Filter - It selects SubArray from actual Array with some criteria(conditions) satisfied
let even = numbers.filter((num)=>{
    return num % 2 === 0
})
console.log(even)


//Reduce - It will do operations on all elements and then return single value
let mul = numbers.reduce((total, currentValues)=>{
    return total * currentValues
})
console.log(mul)