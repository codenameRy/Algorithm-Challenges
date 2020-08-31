
// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

//Solution 1 - Runtime 228ms

var isPalindrome = function(x) {
    return x == String(x).split('').reverse().join('')
  };
console.log(isPalindrome(121))

  //Solution 2 - Runtime 204ms
var isPalindrome2 = function(x) {
    if (x < 0) return false;
    var revX = 0;
    var y = x;
    while (x > 0) {
        revX = revX * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return y === revX;
};

console.log(isPalindrome(-121))

//Solution 3 - Runtim 200ms

var isPalindrome3 = function(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
    var revX = 0;
    while (x > revX) {
        revX = revX * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return (x === revX) || (x === Math.floor(revX / 10));
};

console.log(isPalindrome3(101))