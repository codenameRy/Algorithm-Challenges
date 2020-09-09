//Integer to Roman Numeral

//Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
var intToRoman = function(num) {
    var M = ["", "M", "MM", "MMM"];
    var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return M[Math.floor(num/1000)] + C[Math.floor((num%1000)/100)] + X[Math.floor((num%100)/10)] + I[num%10];
};

console.log("10 roman numeral is " + intToRoman(10));
console.log("40 roman numeral is " + intToRoman(40));
console.log("50 roman numeral is " + intToRoman(50));
console.log("102 roman numeral is " + intToRoman(102));

//Measure execution time
console.time('Execution Time');

// task starts
for (var i = 0; i < 100000000;i++);
// task ends

console.timeEnd('Execution Time');