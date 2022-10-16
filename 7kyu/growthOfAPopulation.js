//Using for loop
function nbYear (p0, percent, aug, p){
    for (var count =0; p0<p; count++){
       p0= Math.floor(p0 + p0 * percent/100 + aug) 
    }
    return count
}

//Using arrow function and recursion
const nbYear = (p0, percent, aug, p) => 
p0 < p ? true + nbYear(p0 += p0 * percent/100 + aug | 0, percent, aug, p) : false

