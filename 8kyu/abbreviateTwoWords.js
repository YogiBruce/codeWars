function abbrevName(name){
    const [firstName, lastName] = name.split(' ')
      
     return firstName.charAt(0).toUpperCase() + "."+  lastName.charAt(0).toUpperCase()
      }

console.log(abbrevName("Robert Arnold"))