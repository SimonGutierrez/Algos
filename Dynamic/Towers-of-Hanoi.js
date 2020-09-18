/* eslint-disable no-useless-return */
// move disks from tower x to tower z in order from smallest to largest
// Explaination: https://stackoverflow.com/questions/6947653/how-does-recursive-algorithm-work-for-towers-of-hanoi

const towersOfHanoi = (diskNum, from, to, via) => {
    if (diskNum > 0) {
        towersOfHanoi(diskNum - 1, from, via, to);
        console.log('Move disk from Tower ', from, ' to Tower ', to);
        towersOfHanoi(diskNum - 1, via, to, from);
    }

}

console.log(towersOfHanoi(3, 'A', 'C', 'B'));

/*
Move disk from Tower  A  to Tower  C
Move disk from Tower  A  to Tower  B
Move disk from Tower  C  to Tower  B
Move disk from Tower  A  to Tower  C
Move disk from Tower  B  to Tower  A
Move disk from Tower  B  to Tower  C
Move disk from Tower  A  to Tower  C
*/
