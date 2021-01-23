// https://leetcode.com/problems/keys-and-rooms/

var canVisitAllRooms = function(rooms) {
    // keep track of all visited rooms Set()
    // have a stack of keys, to pop()
    let visited = new Set(), stack = rooms[0];
    // add room 0 to visited rooms;
    visited.add(0);

    while (stack.length) {
      let key = stack.pop();

      if (!visited.has(key)){
        visited.add(key)
        stack.push(...rooms[key])
      }
    }

    return visited.size === rooms.length
  };

  console.log(canVisitAllRooms([[1], [2], [3], []])) // true
  console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])) // false

