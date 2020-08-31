// Given a 32-bit signed integer, reverse digits of an integer.

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

//Solution 1 with While Loop
var reverse = function(x) {
    var revX = 0;
    var absX = Math.abs(x);
    while (absX > 0) {
        var last = absX % 10;
        revX = revX * 10 + last;
        absX = (absX - last) / 10;
    }

    // in case overflow, in JavaScript maximum number is 2^31 - 1
    if (revX > Math.pow(2, 31) - 1) return 0;

    if (x < 0) revX = -revX;
    return revX;
};

console.log(reverse(321))
console.log(reverse(-256))

//Solution 2 with toString, Split, Reverse, Join

var reverse = function(x) {
    let str = Math.abs(x).toString().split('').reverse().join('');
    let reverse = Number(x < 0 ? '-' + str : str);
    
    return reverse > 2 ** 31 || reverse < -(2 ** 31) ? 0 : reverse;
};