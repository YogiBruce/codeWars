function find_average(array) {
    let average = 0;
    for (i=0; i<array.length; i++){
      average = (array.reduce((a,b) => a+b, 0))/(array.length)
    }
    return average;
  }