// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//
// For example:
//
// summation(2) -> 3
// 1 + 2
//
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
}

// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
//
// Your function will accept three arguments:
// The first and second argument will be numbers.
// The third argument will represent a sign indicating the operation to perform on these two numbers.
//
// Example:
// calculator(1,2,"+"); //=> result will be 3
// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
//
// Example:
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"
// Good luck!

function calculator(a,b,sign){
  if ((typeof a === "number") && (typeof b === "number")) {
    switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    }
  }
  return "unknown value";
}

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
//
// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
//
// This function should return a number (final grade). There are four types of final grades:
//
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples:
//
// finalGrade(100, 12);  // 100
// finalGrade(99, 0);    // 100
// finalGrade(10, 15);   // 100
//
// finalGrade(85, 5);    // 90
//
// finalGrade(55, 3);    // 75
//
// finalGrade(55, 0);    // 0
// finalGrade(20, 2);    // 0
// *Use Comparison and Logical Operators.

function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10) return 100;
  if(exam > 75 & projects >= 5) return 90;
  if(exam > 50 & projects >= 2) return 75;
  return 0;
}

// In this programming exercise, you're going to learn about functions, boolean (true/false) values, strings, and the if-statement.
//
// A function is a block of code that takes an input and produces an output. In this example, boolean_to_string is a function whose input is either true or false, and whose output is the string representation of the input, either "true"/"True" or "false"/"False" (check the sample tests about what capitalization to use in a given language).
//
// A common idea we often want to represent in code is the concept of true and false. A variable that can either be true or false is called a boolean variable. In this example, the input to boolean_to_string (represented by the variable b) is a boolean.
//
// Lastly, when we want to take one action if a boolean is true, and another if it is false, we use an if-statement.
//
// For this kata, don't worry about edge cases like where unexpected input is passed to the function. You'll get to worry about these enough in later exercises.

function booleanToString(b){
  let boolean =b.toString();
  console.log(boolean)
  return boolean
}

// Write function makeUpperCase.

function makeUpperCase(str) {
  // Code here
  var res = str.toUpperCase();
  return res;
}
