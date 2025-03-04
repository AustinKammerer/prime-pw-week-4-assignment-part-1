console.log("***** Function Practice *****");

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!";
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('helloName - should say "Hello, Austin" - ', helloName("Austin"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log("addNumbers - 3 & 4 should return 7 -", addNumbers(3, 4));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log(
  "multiplyThree - 4, 5, 6 should return 120 -",
  multiplyThree(4, 5, 6)
);
// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log("isPositive - should say true", isPositive(3));
console.log("isPositive - should say false", isPositive(0));
console.log("isPositive - should say false", isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length - 1];
}
let array1 = ["red", "blue", "green"];
let array2 = [];
console.log('getLast - should say "green" -', getLast(array1));
console.log('getLast - should say "undefined" -', getLast(array2));
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  let found = false;
  for (let i = 0; i < array.length && !found; i++) {
    if (value === array[i]) {
      found = true;
    }
  }
  return found;
}
console.log("find - should say true -", find("red", array1));
console.log("find - should say true -", find("green", array1));
console.log("find - should say false -", find("orange", array1));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter.toLowerCase() === string[0].toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
console.log("isFirstLetter - should say true", isFirstLetter("a", "apple"));
console.log("isFirstLetter - should say true", isFirstLetter("a", "Apple"));
console.log("isFirstLetter - should say false", isFirstLetter("z", "apple"));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum;
}
let array3 = [1, 2, 3, 4, 5];
console.log('sumAll - should return "15" -', sumAll(array3));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function positives(array) {
  let newArray = [];
  for (let integer of array) {
    if (integer > 0) {
      newArray.push(integer);
    }
  }
  return newArray;
}
let array4 = [-1, 2, 3, -4, 5];
let array5 = [-1, -2, -3, -4, -5];
console.log(
  'positives - should return "[2, 3, 5]" (array4 unchanged) -',
  positives(array4),
  "array4: ",
  array4
);
console.log(
  "positives - should return empty array (array5 unchanged) -",
  positives(array5),
  "array5: ",
  array5
);
// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
//
// Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x) = x^b with respect to x evaluated at x = m, where b and m are constants.
function derivative(b, m) {
  return b * m ** (b - 1);
}
console.log("derivative - should return 12 -", derivative(3, 2));
console.log("derivative - should return -108 -", derivative(4, -3));
console.log("derivative - should return 1171280 -", derivative(5, 22));
