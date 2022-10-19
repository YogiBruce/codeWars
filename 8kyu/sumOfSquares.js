//For loop for squares and return reduce.
function squareSum(numbers){
    squares = [];
    let len = numbers.length
    for (i=0; i < len; i++){
      squares.push(numbers[i]*numbers[i])
    }
    return squares.reduce((a,b)=>a+b,0)
  }

  //Reduce function
  function squareSum(numbers){
    return numbers.reduce(function(sum, n ){
        return (n*n)+sum;
    }, 0)
  }

  //One line
  function squareSum(numbers){
    return numbers.reduce((sum,num)=> sum + (num*num),0)
  }
