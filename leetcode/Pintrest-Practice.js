
const names1 = ['Alison', 'Bob', 'Flex', 'Diana'];


const createName = (names, max) => {
  let count = names.length;

  while (count) {
    let result = concatNames(names, count);

    if (result.length <= max) return result;

    count--;
  }

  return '';
}


const concatNames = (names, limit) => {
    if (!limit) limit = names.length;
    let concatedName = '';

    for (let i = 0; i < names.length && i < limit; i++) {
    let name = names[i];
    if (i === names.length - 1) {
        concatedName += `and ${name}`;
    } else {
        concatedName += `${name}, `;
        }
    }

    if (limit < names.length) {
        concatedName += `and ${names.length - limit} more`;
    }

    return concatedName;
}

// "" limit = 5
//  "Ali, and 2 more"   limit = 18

console.log(concatNames(names1)); // "Alison, Bob, Flex,and Diana"
console.log(concatNames(names1, 2)); // "Alison, Bob, and 2 more"
console.log(concatNames(names1, 3)); // "Alison, Bob, Flex, and 1 more"
console.log(concatNames(names1, 4)); // "Alison, Bob, and 2 more"
console.log(createName(names1, 4)); // ""
console.log(createName(names1, 18)); // "Alison, and 3 more"
console.log(createName(names1, 100)); // "Alison, Bob, Flex and Diana"

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
  };


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


// const log = ( arr) => {

//   let roomLog = new Map();

//   for (let location of arr.data) {

//     if (roomLog.has(location.room) && location.state != roomLog.get(location.room).currentState) {
//         let currentLocation = roomLog.get(location.room);
//         currentLocation[location.state].push(location.time);
//         currentLocation.currentState =  currentLocation.currentState  == 'on' ? 'off' : 'on';
//         roomLog.set(location.room, currentLocation);
//     }
//     else {
//       roomLog.set(location.room, { on: [], off: [], currentState: location.state})
//     }
//   }


//   return roomLog;

// }

// console.log(log(json_data));

/*
find how many days until a holiday return:

`Holiday is x days away`

if the holiday has passed return:

null;

if holiday is today return:

`Holiday is today`
*/


let test1 = {name: 'Halloween', date: new Date('2020, 30, 10')}

const howManyDays = (dic) => {
  let today = new Date();

  if (dic.date.now() === today.date.now()) {
    return `${dic.name} is today`
  } else if (dic.date.now() > today.now()) {
    let diff = // look up the diff in days on google
    return `Holiday is diff days away`
  } else {
    return null;
  }
}



/*
make a grid and base it off of the diff weights of the pins that come in; Pins are already ordered in most relv to least;
you want the grid to be as balanced as possible meaning the height of each col should be balanced no one cols height should be that much diff than another

input: 
[
  {height: 200},
  {height: 150},
  {height: 50},
  {height: 100},
]

outPut:
[
  [{height: 200},{height: 100}],
  [{height: 150},{height: 50}]
]
*/