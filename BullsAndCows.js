/*
https://leetcode.com/problems/bulls-and-cows/
You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows.

Please note that both secret number and friend's guess may contain duplicate digits.

Example 1:

Input: secret = "1807", guess = "7810"

bull = 1
cow = 2;
                                    ^
Input: secret = "1121", guess = "1111"
Output: "3A0B"
bulls: 3
cows: 0

target is bull and taget less than or equal to 0.
{
  1: 0
  2: 1
}

Output: "1A3B"

Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.
Example 2:

Input: secret = "1123", guess = "0111"

Output: "1A1B"

Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.
*/

const bullsAndCows = (secret, guess) => {

}

console.log(bullsAndCows('1807', '7810')); // 1A3B
console.log(bullsAndCows('1121', '1111')); // 3A0B
