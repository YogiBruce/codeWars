// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {

    let result = ''
    for (let i=str.length-1; i >=0 ; i--) {
        result += str[i]
    }
    return result

}

//for loop str length

//return str in reverse 