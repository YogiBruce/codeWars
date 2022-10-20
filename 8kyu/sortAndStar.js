//Function
function twoSort(s) {
    //sort array
      const sorted = s.sort()
    //first element
      return sorted[0]
      .split("")
      .join("***")
    //***
    }

//Arrow function
twoSort = (s) => s.sort()[0].split("").join("***")