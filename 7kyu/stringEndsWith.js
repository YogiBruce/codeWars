//Using if function
function solution(str, ending) {
    if (str.endsWith(ending)) {
        return true
    } else {
        return false
    }
}
console.log(solution("run it back", "ack"))


//simple solution
function solution(str, ending){
    return str.endsWith(ending);
}
console.log(solution("run it back", "ack"))



//Arrow function
const solution = (str,ending) => str.endsWith(ending);
//shorthand
const solution = (s, t) => s.endsWith(t);

console.log(solution("run it back", "ack"))


//Sting slice method
const solution = (str, ending) => str.slice(0-ending.length) === ending;

console.log(solution("run it back", "ack"))