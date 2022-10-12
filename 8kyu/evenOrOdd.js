function even_or_odd(number) {
    let x = number % 2;
    if (x == 0){
      return 'Even'
    } else if (x == 1 || x == -1){
      return 'Odd'
    } else{
      return 'NaN'
    }
  }