//List all integers between a and b in an array(a < b)
function between(a, b) {
    var arr=[]
    for (let i = a; i <= b; i++){
      arr.push(i)
    }return arr
  }

  console.log(between(-3,3))