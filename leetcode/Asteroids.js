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

// Time: O(N) numeber of asteroids to loop through;
// Space: O(N) number of asteroids to save in slack;

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


// simple solution that uses one loop;

const simpleSolution = (asteroids) => {
    const s = [];
    for (let i = 0; i < asteroids.length; i++) {
        const asteroid = asteroids[i];

        // Negative asteroids to the left of the stack can be ignored.
        // They'll never collide. Let's just add it to the answer stack and
        // move on. I consider this a special case.
        if ((s.length === 0 || s[s.length - 1] < 0) && asteroid < 0 ) {
            s.push(asteroid);

        // If an asteroid a is positive (l to r), it may still collide with an
        // a negative asteroid further on in the asteroids array
        } else if (asteroid > 0) {
            s.push(asteroid);

        // a is negative. It can only collide with positive ones in
        // the stack. The following will keep on iterating
        // until it is dealt with.
        } else {
            const pop = s.pop();

            // positive pop beats negative a, so pick up pop
            // and re-add it to the stack.
            if (Math.abs(pop) > Math.abs(asteroid)) {
                s.push(pop);

            // a has larger size than pop, so pop will get dropped
            // and we'll retry another iteration with the same
            // negative a asteroid and whatever the stack's state is.
            } else if (Math.abs(pop) < Math.abs(asteroid)) {
                i--;
            // magnitude of positive pop and negative a are the same
            // so we can drop both of them.
            } else {
                continue;
            }
        }
    }

    // The stack should be the answer
    return s;
}

console.log(simpleSolution(test6)) // [-2,-2,-2]
