/* eslint-disable comma-spacing */
// example: what a cinema looks like

// let theater = [
//     [1,2,3, 4,5,6,7, 8,9,10],
//     [1,2,3, 4,5,6,7, 8,9,10],
//     [1,2,3, 4,5,6,7, 8,9,10],
// ]

// how many families of 4 can fit in each theater
// rules: families need to be sat together, exception families can be split in pairs of two if split by an aisle
// example: families can be seated in 4-5-6-7, or 6-7-8-9 and 2-3-4-5 (exceptions)

// eslint-disable-next-line complexity
var maxNumberOfFamilies = function(n, reservedSeats) {
   let theater = [];
   let families = 0;

   // create the theater
   for (let i = 0; i < n; i++) {
       theater.push(new Array(10));
   }
   // mark reserved seats in your theater
   reservedSeats.forEach((seat) => {
       let row = seat[0] - 1;
       let column = seat[1] - 1;

       theater[row][column] = true;
   });
   // loop thorugh the theater and find how many families can fit by compairing two seats at a time;
   for (let i = 0; i < theater.length; i++) {
       let currRow = theater[i];
       let leftPair1 = !currRow[1] && !currRow[2];
       let rightPair1 = !currRow[3] && !currRow[4];
       let leftPair2 = !currRow[5] && !currRow[6];
       let rightPair2 = !currRow[7] && !currRow[8];

       if (leftPair1 && rightPair1) {
           families++;
           if (leftPair2 && rightPair2) {
               families++
           }
       } else if (rightPair1 && leftPair2 || leftPair2 && rightPair2) {
           families++;
       }

   }

   return families;
};

console.log(maxNumberOfFamilies(3, [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]));
console.log(maxNumberOfFamilies(2, [[2,1],[1,8],[2,6]]));
console.log(maxNumberOfFamilies(4, [[4,3],[1,4],[4,6],[1,7]]));

// most optimal solution
// var maxNumberOfFamilies2 = function(n, reservedSeats) {
//     let map = new Map();

// for (let i = 0; i < reservedSeats.length; i++) {

//     let reserved;
//     if (map.has(reservedSeats[i][0])) {

//         reserved = map.get(reservedSeats[i][0]);
//     } else {

//         reserved = [];
//         map.set(reservedSeats[i][0], reserved);
//     }

//     reserved[reservedSeats[i][1]] = true;
// }

// let seats = 0, groups = (n - map.size) * 2;

// console.log('the map', map);

// map.forEach((reserved, key) => {

//     let leftAisle1 = !reserved[2] && !reserved[3];
//     let rightAisle1 = !reserved[4] && !reserved[5];
//     let leftAisle2 = !reserved[6] && !reserved[7];
//     let rightAisle2 = !reserved[8] && !reserved[9];

//     if (leftAisle1 && rightAisle1) {

//         ++groups;

//         if (leftAisle2 && rightAisle2) {

//             ++groups;
//         }
//     } else if ((rightAisle1 && leftAisle2) || (leftAisle2 && rightAisle2)) {

//         ++groups;
//     }
// });

// return groups;

// };

// console.log(maxNumberOfFamilies2(3, [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]));
