// https://leetcode.com/problems/available-captures-for-rook/

const numRookCaptures = (board) => {
    let rookPos = [];
    let numOfCaps = 0;

    board.forEach((element, index) => {
        if (element.indexOf('R') !== -1) {
            rookPos[0] = index;
            rookPos[1] = element.indexOf('R');
        }
    });
    //         up ^     right >  down v   left <
    let dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    for (let i = 0; i < dir.length; i++) {
        let r = rookPos[0];
        let c = rookPos[1];
        while (board[r] && board[r][c]) {
            let currPos = board[r][c];
            if (currPos === 'B') {
                break;
            } else if (currPos === 'p') {
                numOfCaps++;
                break;
            }

            r += dir[i][0];
            c += dir[i][1];
        }
    }

    return numOfCaps;
};

let input = [
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['p', 'p', '.', 'R', '.', 'p', 'B', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'B', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
];

let input2 = [
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
    ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
    ['.', 'p', 'B', 'R', 'B', 'p', '.', '.'],
    ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
    ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
]


console.log(numRookCaptures(input)) // 3
console.log(numRookCaptures(input2)) // 0
