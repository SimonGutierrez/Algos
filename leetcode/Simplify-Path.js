// https://leetcode.com/problems/simplify-path/

const simplifyPath = (path) => {
    let stack = [];
    path = path.split('/');

    for (let i = 0; i < path.length; i++) {
        let currPath = path[i];

        if (currPath === '..') {
            stack.pop();
        } else if (currPath !== '.' || currPath !== '') {
            stack.push(currPath);
        }
    }

    return '/' + stack.join('');
}
