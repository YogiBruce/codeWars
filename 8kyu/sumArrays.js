//Sum all numbers of a given array


//For Loop
function sum(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
};

//Arrow function using reduction 
const sum = (n)=> n.reduce((a,b)=>a+b,0)



//TEST
console.log(sum([1, 2, 3]))
console.log(sum([1,2,3,4,5]))