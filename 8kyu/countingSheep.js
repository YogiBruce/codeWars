//input array of sheeps = values are boolean
//ouput - number of sheep present in array
//var counts

function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++ ){
      if(arrayOfSheep[i]===true){
        count += 1}
      }
      return count;
    }