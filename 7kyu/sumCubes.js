// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Using a while loop
function sumCubes(n) {
  let result = 0;
  while (n > 0) {
    // updates result with addition of iteration cubed
    result += n ** 3;
    //counts iterations to zero
    n--;
  }
  return result;
}

// Using Array methods
const sumCubes = (n) =>
  Array.from({ length: n }, (_, index) => (index + 1) ** 3).reduce(
    (acc, curr) => acc + curr
  );


