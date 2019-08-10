// Write a function called appendArrays that appends the items from array 2 onto array 1, returning the newly formed array.
//
// For example if your 2 arrays were:
//
// var array1 = [a,b,c]
// var array2 = [1,2,3]
// After using your appendArrays function, the result should be [a,b,c,1,2,3]
//
// Your function should also be able to handle nested arrays.
//
// For example, combining array [['x','x'],'B'] with array ['c','D'] should return [['x','x'],'B','c','D'].
//
// Your solution should account for a situation for either the first or second inputs aren't actually arrays.
//
// // basic test
// Test.assertSimilar(appendArrays(['this'],['that']), ['this','that'])
//
// // second input is not an array
// Test.assertSimilar(appendArrays([1,2], [1]), [1,2,1])
//
// // first input is not an array
// Test.assertSimilar(appendArrays([2], [1,1,1]), [2,1,1,1])

function appendArrays (arr1, arr2) {
  return arr1.concat(arr2)  
}


    
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if ( bool === true) {
    return 'Yes'
  } else {
     return 'No'
  }

}

// Given an integer as input, can you round it to the next (meaning, "higher") 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

function roundToNext5(n){
  return Math.ceil(n/5)*5
 } 

//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

//[10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
    var arr = numbers.sort(function(x, y) {
        return x - y;
    });
    return arr[0] + arr[1];
};


// We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.
//
// We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available


function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  return this.name = `${first} ${last}`
}