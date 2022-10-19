//Return third angle of triangle using arrow function
const otherAngle = (a, b) =>  (180 - a - b)

console.log(otherAngle(50,60))

//Standard function
function thirdAngle(a,b){
    return 180-a-b
}

console.log(thirdAngle(50,60))