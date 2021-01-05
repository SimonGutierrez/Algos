// https://leetcode.com/problems/palindrome-partitioning/

const partition = (s) => {
    let result = [];

    const isPali = (left, right) => {

        while (left < right) {
            if (s[left] !== s[right]) return false;

            left++;
            right--;
        }

        return true;
    }


    const findPalens = (left, array) => {
        // building an array with all palens inside
        if (left === s.length) {
            result.push(array);
        } else {
            for (let right = left; right < s.length; right++) {
                if (isPali(left, right)) {
                    findPalens(right + 1, [...array, s.slice(left, right + 1)])
                }
            }
        }
    }

    findPalens(0, []);

    return result;
};

console.log(partition('aab')) // [[a, a, b], ['aa', 'b']]
