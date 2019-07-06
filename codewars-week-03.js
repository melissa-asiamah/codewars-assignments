//Given a positive integer N, return the largest integer k such that 3^k < N.

//For example,

//largestPower(3) = 0
//largestPower(4) = 1
//You may assume that the input to your function is always a positive integer.

function largestPower(n){
  let res = 0;
  while(Math.pow(3, res) < n) res++;
  return res - 1;
}

//Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

//Example:
//Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
//Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
//Good luck!

const ultimateReverse = s => {
  let str=s.join('').split('').reverse()
  let arr=[]
  for (let i=0;i<s.length;i++){
   arr.push(str.splice(0,s[i].length).join(''))
  }
  return arr
};

//JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

//The solution would work like the following:

//getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
 return numbersArray.filter(value=>{if(value%2==0)return value})
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

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
// Input will always be valid, i.e. no negative integers.

const countSheep = num =>
Array.from({ length: num }, (_, index) => `${++index} sheep...`).join('')
