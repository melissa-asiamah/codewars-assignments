//You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//FUNDAMENTALSARRAYS

function isValidWalk(walk) {
  let n = 0
  let s = 0
  let e = 0
  let w = 0
  for(let i = 0; i < walk.length; i++) {
    let direction = walk[i]
    if(direction === 'n') {
      n++
    }
    else if(direction === 's') {
      s++
    }
    else if(direction === 'e') {
      e++
    }
    else if(direction === 'w') {
      w++
    }
  }
  if(n === s && e === w && walk.length === 10) {
    return true
  }else{
    return false
   }
}
