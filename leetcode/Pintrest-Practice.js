
const names = ['Alison', 'Bob', 'Flex', 'Diana'];


const createName = (names, max) => {
  let result = '';
  let counter = names.length;

  while (counter) {

    result = concatNames(names, counter);

    if (result.length <= max) return result;

    counter--;
  }

  return '';
}


const concatNames = (names, limit) => {

  let concatedName = '';

  for (let i = 0; i < names.length && i < limit; i++) {
    let name = names[i];
    if (i == names.length - 2){
      concatedName += `${name} and `;
    }
    else {
      concatedName += `${name}, `;
    }
  }

  if (limit < names.length) {
    return concatedName += `and ${names.length - limit} more`;
  }


  return concatedName.trim().slice(0, -1);
}

// "" limit = 5
//  "Ali, and 2 more"   limit = 18

// // console.log(concatNames(names)); // "Alison, Bob, Flex,and Diana"
// console.log(concatNames(names, 2)); // "Alison, Bob, and 2 more"
// console.log(concatNames(names, 3)); // "Alison, Bob, and 2 more"
// console.log(concatNames(names, 4)); // "Alison, Bob, and 2 more"
// console.log(createName(names, 4)); // ""
// console.log(createName(names, 18)); // "Alison, and 3 more"
// console.log(createName(names, 100)); // "Alison, Bob, Flex and Diana"

const json_data = {
    data: [
      {
        time: '200',
        room: 'LivingRoom',
        state: 'off',
      },
      {
        time: '200',
        room: 'Office',
        state: 'on',
      },
      {
        time: '230',
        room: 'LivingRoom',
        state: 'on',
      },
      {
        time: '305',
        room: 'LivingRoom',
        state: 'off',
      },
    ]
  }


/**
 *
 * {
 * "livingRom": {
 *  "on": [200, 400]
 *  "off": [305, 800]
 *  "currentState": "on"
 * }
 * }
 */


const log = ( arr) => {

  let roomLog = new Map();

  for (let location of arr.data) {

    if (roomLog.has(location.room) && location.state != roomLog.get(location.room).currentState) {
        let currentLocation = roomLog.get(location.room);
        currentLocation[location.state].push(location.time);
        currentLocation.currentState =  currentLocation.currentState  == 'on' ? 'off' : 'on';
        roomLog.set(location.room, currentLocation);
    }
    else {
      roomLog.set(location.room, { on: [], off: [], currentState: location.state})
    }
  }


  return roomLog;

}

console.log(log(json_data));

[]
