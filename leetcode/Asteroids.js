/* eslint-disable complexity */
// leet code link: https://leetcode.com/problems/asteroid-collision/

const asteroidCollision = (asteroids) => {
    let stack = [];

    for (let asteroid of asteroids) {
        let prev = stack[stack.length - 1];
        if (!prev) {
            stack.push(asteroid);
            continue;
        }
        if (prev > 0 && asteroid < 0) {
            while (prev <= Math.abs(asteroid) && stack.length && prev > 0) {
                console.log()
                stack.pop();
                if (prev + asteroid === 0) break;
                prev = stack[stack.length - 1];
            }
            if (prev < 0 || !prev) stack.push(asteroid);
        } else {
            stack.push(asteroid);
        }
    }

    return stack;
}

const test1 = [5, 10, -5];
const test2 = [8, -8];
const test3 = [10, 2, -5];
const test4 = [-2, -1, 1, 2];
const test5 = [-2, -2, 1, -1];
const test6 = [1, -2, -2, -2];

console.log(asteroidCollision(test1)) // [5, 10]
console.log(asteroidCollision(test2)) // []
console.log(asteroidCollision(test3)) // [10]
console.log(asteroidCollision(test4)) // [-2, -1, 1, 2]
console.log(asteroidCollision(test5)) // [-2,-2]
console.log(asteroidCollision(test6)) // [-2,-2,-2]
