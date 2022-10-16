//Arrow function and reduce method (implicit return)
const betterThanAverage = (classPoints, yourPoints) => classPoints.reduce((prev,curr) => prev+curr)/classPoints.length < yourPoints

//Classic function with for loop
function betterThanAverage (classPoints, yourPoints){
    let sum =0
    for (let i=0; i<classPoints.length; i++){
      sum += classPoints[i]
    }
    return sum/classPoints.length < yourPoints
  }