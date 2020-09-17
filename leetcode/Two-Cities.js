/*
https://leetcode.com/problems/two-city-scheduling/

A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.


Example 1:

Input: costs = [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation:
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
Example 2:

Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
Output: 1859
Example 3:

Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
Output: 3086


             A
let A = [10, 30, 30, 400]; pointerA = 0   limitA = 1
`            B
let B = [20, 20, 50, 200]; pointerB = 0   limitB = 2

A[pointer]


 */


const findCosts = (costs) => {
  let cityACosts = [];
  let cityBCosts = [];
  let result = 0;

  for (let [cityA, cityB] of costs) {
    cityACosts.push(cityA);
    cityBCosts.push(cityB);
  }

  cityACosts.sort((a, b) => a - b);
  cityBCosts.sort((a, b) => a - b);
  console.log(cityACosts, cityBCosts)
  console.log(costs)
  let pointerA = 0;
  let counterA = costs.length / 2;
  let pointerB = 0;
  let counterB = costs.length / 2;

  while (counterA || counterB) {
    if (cityACosts[pointerA] > cityBCosts[pointerB]) {
      if (counterB > 0) {
        result += cityBCosts[pointerB];
        counterB--;
        pointerB++;
      } else {
        result += cityBCosts[pointerA];
        counterA--;
        pointerA++;
      }
    } else if (counterA) {
        result += cityBCosts[pointerA];
        counterA--;
        pointerA++;
    } else {
        result += cityBCosts[pointerB];
        counterB--;
        pointerB++;
      }
  }

  return result;
}

const costs = [[10, 20], [30, 200], [400, 50], [30, 20]];

console.log(findCosts(costs)) // 110

// const costs = [[10, 20], [30, 200], [400, 50], [30, 20]];

// var twoCitySchedCost = function(costs) {
//     costs = costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]))

//     let total = 0;
//     let cityAMax = costs.length / 2;
//     let cityBMax = costs.length / 2;

//     for (let [cityA, cityB] of costs) {
//         if (cityA < cityB) {
//             if (cityAMax) {
//                 total += cityA;
//                 cityAMax--;
//             }
//             else {
//                 total += cityB;
//                 cityBMax--;
//             }
//         }
//         else if (cityBMax) {
//                 total += cityB;
//                 cityBMax--;
//             }
//             else {
//                  total += cityA;
//                 cityAMax--;
//             }
//     }

//     return total;
// };

// console.log(twoCitySchedCost(costs))
