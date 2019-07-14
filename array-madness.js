
//SpeedCode #2 - Array Madness
//Objective
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of
//the squares of each element in a is strictly greater than the sum of the cubes of each element in b.




function arrayMadness(a, b) {
  console.log("first array:", a, "second array:", b)

  let arrayA = []
  let arrayB = []
  let sumA = 0
  let sumB = 0

  for(let i = 0; i < a.length; i++) {
  arrayA.push(Math.pow(a[i], 2))
  console.log("array a: ", arrayA)
  }

for(let i = 0; i < b.length; i++) {
  arrayB.push(Math.pow(b[i], 3))
  console.log("array b: ", arrayB)
}

for(let i = 0; i < arrayA.length; i++) {
  sumA = arrayA[i] + sumA
  console.log("total a: ",sumA)

}
for(let i = 0; i <arrayB.length; i++) {
  sumB = arrayB[i] + sumB
  console.log("total b: ",sumB)

}
if (sumA > sumB) {
  return true
}else {
return false
}
