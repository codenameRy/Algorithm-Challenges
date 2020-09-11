//Find all duplicates in an array

// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), 
//some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Example
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

//Solution 1 - For Loop
var findDuplicates = function(nums) {
    // creating a new List
    const result = []; nums.unshift(0);
    
    // Taking the absolute value to find index
    // If it is not greater than 0 (i.e) negative then the number is a duplicate
    for(let i = 0; i < nums.length; i++) {
        const idx = Math.abs(nums[i]);
        if(nums[idx] < 0) result.push(idx);
        nums[idx] *= -1;
    }
    return result;    
};

//Test 1
input = [4,3,2,7,8,2,3,1];
console.log(findDuplicates(input));

// Solution 2 - Filter and Set

var findDuplicates2 = function (nums) {
    return [...new Set(nums.filter((num, index) => nums.indexOf(num) != index))];
};

//Test 1
input2 = [4,3,2,8,8,2,3,1];
console.log(findDuplicates2(input2));