// You are given an array with several "even" words, one "odd" word, and some numbers mixed in.
//
// Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.



function oddBall(arr){
  let oddIndex =-1
  arr.forEach(function(element, index) {
    if(element === "odd"){
      oddIndex = index
      console.log(oddIndex)
    }
   })
 for(let i =0; i < arr.length; i++){
   if(arr[i] === oddIndex){
    return true
   }
  }
  return false
}
