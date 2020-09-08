//Missing Number

//Easy Leetcode problem
// Given an array containing n distinct numbers taken from 
// 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:
// Input: [3,0,1]
// Output: 2

//Example 2:
// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

// Note:
// Your algorithm should run in linear runtime complexity. 
// Could you implement it using only constant extra space complexity?

var missingNumbers = function(nums) {
    let sum = nums.reduce((a,b) => a + b);
    return (nums.length + 1) * nums.length / 2 - sum;
}

arr1 = [3,0,1]; // 2
arr2 = [9,6,4,2,3,5,7,0,1] // 8

console.log(missingNumbers(arr1))
console.log(missingNumbers(arr2))

//Variation Find Missing Numbers

function findMissingNumbers(arr){
    const missing=[]; //Create empty Array
    let numSort = arr.sort((a,b) => a - b) //Create new variable to sort numbers
    for (let i = numSort[0]; i <= numSort[numSort.length - 1]; i++) {
    if (numSort.indexOf(i) === -1) missing.push(i)
    }
    return missing;
 }

 arr3 = [1,2,5,6]; //3, 4
 arrx = [2,4,7,8,10]; //3,5,6,9

 console.log("Array 3 is missing " + findMissingNumbers(arr3));
 console.log("Array 3 is missing " + findMissingNumbers(arrx));


 arr3 = [-3,-2,1,5];


 console.log(findMissingNumbers(arr3));

 arr4 = [1,2,3,6,7];
 console.log("Array 4 missing numbers are " + findMissingNumbers(arr4));