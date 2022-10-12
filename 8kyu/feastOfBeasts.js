feast = (beast, dish) => beast[0] == dish[0] && beast[beast.length-1] == dish[dish.length-1]

feast = (beast, dish) => beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1)

function feast(beast,dish){
  if ((beast[0] == dish[0]) && (beast[beast.length-1] == dish[dish.length-1])){
    return true
  } else {
    return false
  }
}


let feast = (a, b) => a[0] + [...a].pop() == b[0] + [...b].pop()


feast = (a, b) =>  a[0] == b[0] && a.substr(-1) == b.substr(-1)


const feast = (b, d) => `${b[0]}${b[b.length - 1]}` === `${d[0]}${d[d.length - 1]}`

console.log(feast("great blue heron","garlic naan"))

console.log(feast("bear","ice cream"))