/*
?(1) Write a JavaScript program to check if a given string is upper case or not.
*/
console.log("--------     Task 1     --------");
let givenString = "HELLO";
if (givenString.toUpperCase() === givenString) {
  console.log(`"${givenString}" This String is in UpperCase`);
} else {
  console.log(`"${givenString}" This String is in not in UpperCase`);
}

/* 
?(2) Write a JavaScript program that returns 1 if the array is sorted in ascending order. It returns -1 if it is sorted in descending order or 0 if it is not sorted
*/
console.log("--------     Task 2     --------");
let givenArray = [56,49,42,36,29,22,15,8,1];

function checkArraySorting(arr) {
  let isAscending = true;
  let isDescending = true;

  //am starting from the second element
  for (let i = 1; i < arr.length; i++) {
    if (!isAscending && !isDescending){
      break;
    }
    //if the current element is less than the previous element
    if (arr[i] < arr[i - 1]) {
      isAscending = false; //then the array is not in ascending order
    }
    //revert for this condition
    if (arr[i] > arr[i - 1]) {
      isDescending = false;
    }
  }

  if (isAscending) {
    return 1;
  } else if (isDescending) {
    return -1;
  } else {
    return 0;
  }
}

console.log(checkArraySorting(givenArray));

/* 
?(3) Calculate factorial of n using the recursive function. (P.S. Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6)
 */
console.log("--------     Task 3     --------");
function findFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * findFactorial(n - 1);
  }
}
console.log(findFactorial(5));

/*
?(4) Write a JavaScript for loop that iterates on the range passed as argument. For each iteration, it checks if the current number is odd or even and displays a message on the screen.
*/
console.log("--------     Task 4     --------");
let iterates = [1, 2, 5, 61, 0, 2];

for (let i = 0; i < iterates.length; i++) {
  if (iterates[i] % 2 === 0) {
    console.log(iterates[i] + " is even");
  } else {
    console.log(iterates[i] + " is odd");
  }
}

/*
?(5) Pattern
*
* *
* * *
* * * *
* * * * *
*/
console.log("--------     Task 5     --------");
let n = 5;
let pattern = "";
for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    pattern += " * ";
  }
  pattern += "\n";
}
console.log(pattern);


console.log("--------     Task 6     --------");
/*
?(6) Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example, if you accept 025468 the output should be "0-254-6-8".
*/
let userInputNumber = prompt("Enter Numbers");

let output = "";
for (let i = 0; i < userInputNumber.length; i++) {
  if (userInputNumber[i] % 2 === 0 && i !== userInputNumber.length - 1) {//if the number is even and not the last number
    output = output + userInputNumber[i] + "-";
  } else {
    output = output + userInputNumber[i];
  }
}
console.log(output);


console.log("--------     Task 7     --------");
/*
?(7) Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
*/

let object = {
  name: "John",
  age: 25,
  job: "Developer"
};

function reverseObject(obj) {
  let reversedObject = {};
  for (let key in obj) {//loop through the object
    reversedObject[obj[key]] = key;//assigning the value of the key to the key of the value
  }
  return reversedObject;
}
console.log(reverseObject(object));