feast = (beast, dish) => beast[0] == dish[0] && beast[beast.length-1] == dish[dish.length-1]

//feast = (beast, dish) => beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1)

// function feast(beast,dish){
//   if ((beast[0] == dish[0]) && (beast[beast.length-1] == dish[dish.length-1])){
//     return true
//   } else {
//     return false
//   }
// }