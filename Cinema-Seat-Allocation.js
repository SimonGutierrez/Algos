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

var maxNumberOfFamilies = function(n, reservedSeats) {
   let theater = [];
   let families = 0;
   let isValidFam = 0;
   let currReservedSeat = 0;
   let row = 1;
   let column = 2;

   // create the theater
   for (let i = 0; i < n; i++) {
       theater.push(new Array(10));
   }

   while (row <= theater.length) {
       let resrvdSeat = reservedSeats[currReservedSeat]

       if (column === 10) {
           column = 2;
           row++;
       }

       if (isValidFam === 4) {
           families++;
           isValidFam = 0;
       }

       if (resrvdSeat[0] === row && resrvdSeat[1] === column) {
           currReservedSeat++;
           column++;
           isValidFam = 0;
       } else {
           isValidFam++;
           column++;
       }
   }

   return families;

};

console.log(maxNumberOfFamilies(3, [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]));
