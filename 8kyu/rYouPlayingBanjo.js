//Test if name starts with R
function areYouPlayingBanjo(name) {
   
    if((name[0]==="R") || (name[0]==="r")){
      return `${name} plays banjo`
    }else {
      return `${name} does not play banjo`
    }
  }

  console.log(areYouPlayingBanjo("Alexandra"))

  //Ternary?
  function rBanjoPlayer(name){
    return ((name[0]==="R")||(name[0]==="r") ? `${name} plays banjo` : `${name} does not play banjo`)
  }

  console.log(rBanjoPlayer("Robert"))

  //Arrow function ternary
  const ourBanjoPlayer = (name) => (name[0]==="R")||(name[0]==="r") ? `${name} plays banjo` : `${name} does not play banjo`

  console.log(ourBanjoPlayer("rebecca"))