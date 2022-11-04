//For loop
const quarterOf = (month) => {
    if (month>=1 && month<=3){
      return 1
    }else if(month>=4 && month<=6){
      return 2
    }else if(month>=7 && month<=9){
      return 3
    }else {
      return 4
    }
  };

  //August
  console.log(quarterOf(8))

//Arrow function using Math.ceil
const quarterOf = (m) => Math.ceil(m/3)

//December
consol.log(quarterOf(12))