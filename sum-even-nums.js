//Write a function named sumEvenNumbers, taking an array of integers as single parameter.
//Your function must return the sum of the even values of this array.

//For example, considering this input value : [4,3,1,2,5,10,6,7,9,8], then your function
//should return 30 (because 4 + 2 + 10 + 6 + 8 = 30).



function sumEvenNumbers(input) {
let sum=0
 for (let i =0; i < input.length; i++) {
 if(input[i] % 2 === 0) {
    sum+=input[i]
    console.log(input)
  }
 }
 return sum
}
