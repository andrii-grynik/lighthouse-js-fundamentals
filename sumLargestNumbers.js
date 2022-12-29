const sumLargestNumbers = function(inp){
  let largest = inp[0];
  let nextToLargest = inp[1];
  
  if(largest > nextToLargest) {
    largest = inp[0];
    nextToLargest = inp[1];
  } else {
    largest = inp[1];
    nextToLargest = inp[0];
  }
  
  for(let x = 2; x < inp.length; x++) {
    if(inp[x] > largest) {
    nextToLargest = largest;
    largest = inp[x]
    }
  }
  return largest + nextToLargest;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
