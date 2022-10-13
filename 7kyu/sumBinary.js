//Return a sum in binary

function addBinary(a, b) {
    let sum = a + b
    if (sum >= 0) {
        return sum.toString(2)
    } else {
        (~sum).toString(2)
    }
}

const addBinary = (a, b) => (a + b).toString(2)