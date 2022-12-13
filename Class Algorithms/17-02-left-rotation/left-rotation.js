// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

//Original solution
const leftRotation = (arr, positions) => {
    for (i=0; i<positions; i++){
        arr.push(arr.shift())
    }
    return arr
};

// Provided solution
const leftRotation = (arr, positions) => {
    if (arr.length === 0) {
      return;
    }
  
    while (positions > 0) {
      const first = arr.shift();
  
      arr.push(first);
      console.log(arr)
      positions--;
    }
  };