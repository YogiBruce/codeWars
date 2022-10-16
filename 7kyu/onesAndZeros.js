const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2)
  };
  
  
  //Examples:
  // binaryToNumber([0, 1, 1, 0]) should return 6
  // binaryToNumber([1, 1, 1, 1]) should return 15
  // binaryToNumber([0, 0, 0, 1]) should return 1

  console.log(binaryArrayToNumber([...]))