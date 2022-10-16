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

console.log(solution("run it back", "ack"))