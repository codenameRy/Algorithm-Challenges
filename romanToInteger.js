// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

// Example 1:

// Input: "III"
// Output: 3
// Example 2:

// Input: "IV"
// Output: 4

//Solution 1
var romanToInt = function (s) {
    const rdigit = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    }
  
    let result = 0
    for (let i = 0, lastDigit = Infinity; i < s.length; i++) {
      let digit = rdigit[s[i]]
      result += digit <= lastDigit ? digit : digit - lastDigit * 2
      lastDigit = digit
    }
    return result
  };

  console.log(romanToInt('III'))
  console.log(romanToInt('VI'))

  //Solution 2

  var romanToInt2 = function(s) {
    var number = 0;
    var map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var length = s.length;

    number = map[s[length - 1]];
    for (var i = length - 2; i >= 0; i--) {
        if (map[s[i]] < map[s[i + 1]]) {
            number -= map[s[i]];
        } else {
            number += map[s[i]];
        }
    }

    return number;

};

console.log(romanToInt2('IV'));
  console.log(romanToInt2('XI'));

//Solution 3

function romanToInt3(str1) {
    if(str1 == null) return -1;
    var num = char_to_int(str1.charAt(0));
    var pre, curr;
    
    for(var i = 1; i < str1.length; i++){
    curr = char_to_int(str1.charAt(i));
    pre = char_to_int(str1.charAt(i-1));
    if(curr <= pre){
    num += curr;
    } else {
    num = num - pre*2 + curr;
    }
    }
    
    return num;
    }
    
    function char_to_int(c){
    switch (c){
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
    }
    }

    console.log(romanToInt3('XXVI'));
    console.log(romanToInt3('CI'));

    //Solution 2

    var romanToInt4 = function(s) {
      var map = {
          'I': 1,
          'V': 5,
          'X': 10,
          'L': 50,
          'C': 100,
          'D': 500,
          'M': 1000
      }
      var number = 0;
      var index;
      if (s.indexOf('CM')!= -1) number -= 200;
      if (s.indexOf('CD')!= -1) number -= 200
      if (s.indexOf('XC')!= -1) number -= 20;
      if (s.indexOf('XL')!= -1) number -= 20;
      if (s.indexOf('IX')!= -1) number -= 2;
      if (s.indexOf('IV')!= -1) number -= 2;
      for (var i = 0; i < s.length; i++) {
          number += map[s[i]];
      }
      return number;
  };

  console.log(romanToInt4('XXXVI'));
  console.log(romanToInt4('CCIV'));