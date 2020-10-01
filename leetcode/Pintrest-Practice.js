
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

// console.log(concatNames(names1)); // "Alison, Bob, Flex,and Diana"
// console.log(concatNames(names1, 2)); // "Alison, Bob, and 2 more"
// console.log(concatNames(names1, 3)); // "Alison, Bob, Flex, and 1 more"
// console.log(concatNames(names1, 4)); // "Alison, Bob, and 2 more"
// console.log(createName(names1, 4)); // ""
// console.log(createName(names1, 18)); // "Alison, and 3 more"
// console.log(createName(names1, 100)); // "Alison, Bob, Flex and Diana"

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
Part 1:

Find how many days until a holiday return:
`Holiday is x days away`

if the holiday has passed return:
null;

if holiday is today return:
`Holiday is today`

Part 2:

given an array of holidays find the holiday that is closest to days date;
Then order the rest of the holidays after that one base one which ones are closest;

Today = 10 1, 2020;

input: [
  {name: 'Thanksgiving', date: new Date(2020, 10, 24)}
  {name: 'Halloween', date: new Date(2020, 9, 30)},
  {name: 'New Years', date: new Date(2021, 0, 1)},
  {name: 'Valentines Day', date: new Date(2021, 1, 14)},
  {name: 'Christmas', date: new Date(2020, 11, 25)},
]

output: [
  {name: 'Halloween', date: new Date(2020, 9, 30)},
  {name: 'Thanksgiving', date: new Date(2020, 10, 24)}
  {name: 'Christmas', date: new Date(2020, 11, 25)},
  {name: 'New Years', date: new Date(2021, 0, 1)},
  {name: 'Valentines Day', date: new Date(2021, 1, 14)},
]

*/


let test1 = {name: 'Halloween', date: new Date(2020, 9, 30)};
let test2 = [
  {name: 'Halloween', date: new Date(2020, 9, 30)},
  {name: 'Thanksgiving', date: new Date(2020, 10, 24)},
  {name: 'Christmas', date: new Date(2020, 11, 25)},
  {name: 'New Years', date: new Date(2021, 0, 1)},
  {name: 'Valentines Day', date: new Date(2021, 1, 14)}
];

const howManyDays = (dic) => {
  let today = new Date();
  let holidayTime = dic.date.getTime();
  let todaysTime = today.getTime();

  if (holidayTime === todaysTime) {
    return `${dic.name} is today`;
  } else if (holidayTime > todaysTime) {
    let days = Math.floor((Math.abs(todaysTime - holidayTime) / 1000) / 86400)
    return `${dic.name} is ${days} day(s) away`;
  } else {
    return null;
  }
}

const holidayOrder = (holidays) => {
  holidays.sort((a, b) => a.date.getMonth() - b.date.getMonth());

  let today = new Date().getMonth(), left = 0, right = holidays.length - 1, start;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);


    if (holidays[mid].date.getMonth() < today) {
      left = mid + 1;
    } else if (holidays[mid].date.getMonth() > today) {
      right = mid;
    } else {
      start = mid;
      left = mid + 1;
    }
  }

  if (!start) start = left;

  let firstHalf = holidays.slice(start);
  let secondHalf = holidays.slice(0, start);

  return firstHalf.concat(secondHalf);
}

// console.log(howManyDays(test1)) // 'Halloween is x days away;
console.log(holidayOrder(test2))

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
