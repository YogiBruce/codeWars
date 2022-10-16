//Arrow function and reduce method (implicit return)
const betterThanAverage = (classPoints, yourPoints) => classPoints.reduce((prev,curr) => prev+curr)/classPoints.length < yourPoints
