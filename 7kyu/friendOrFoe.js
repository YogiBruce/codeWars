function friend(friends){
    return friends.filter(function (item){return item.length === 4})
  }

  const friend = friends => friends.filter(friend => friend.length == 4)
