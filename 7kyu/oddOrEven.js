//If-else and reduce function
function oddOrEven(array) {
    const sum = array.reduce((a, b) => a + b, 0)
    if (sum % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
}

 //Arrow and ternary
 const oddOrEven = (array) => (array.reduce((a,b)=>a+b,0)%2 == 0) ? "even" : "odd"