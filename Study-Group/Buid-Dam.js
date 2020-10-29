// Given an array of concrete WallPositions & WallHeights, respectively, what is the tallest MUD wall one can build? if none can be build, return 0
// Mud wall: has to be within +/- 1 height of adjacent concrete OR mud wall

// ex: 1
// wallPositions = [1, 2, 4, 7]
// wallHeights = [4, 6, 8, 11]
// output: 10 <-- tallest mud wall height

// idx:    1  2  3  4  5  6  7
// height: 4  6     8        11
//               7     9 [10]

const build = (positions, heights) => {
    let left = 0;
    let right = left + 1;
    let tallest = 0;

    while (positions[right]) {
        let posDiff = Math.abs(positions[left] - positions[right]);
        let heightDiff = Math.abs(heights[left] - heights[right]);
        if (posDiff >= heightDiff) {
            //build mud wall
            let space = posDiff - 1;
            let currMudWall = heights[left];
            while (space) {
                if (currMudWall - space === heights[right]) {
                    currMudWall += 0;
                } else if (currMudWall - space > heights[right]) {
                    currMudWall -= 1;
                } else {
                    currMudWall += 1;
                }

                if (tallest < currMudWall) tallest = currMudWall;

                space--;
                }
            }

        left++;
        right++;
    }

    return tallest;
}

let pos1 = [1, 2, 4, 7];
let heights1 = [4, 6, 8, 11];
let pos2 = [1, 3, 7];
let heights2 = [4, 3, 3];

console.log(build(pos1, heights1)) // 10
console.log(build(pos2, heights2)) // 5
