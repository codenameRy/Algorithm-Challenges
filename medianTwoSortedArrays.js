//Median of Two Sorted Arrays
//Hard Leetcode problem
//Given two sorted arrays nums1 and nums2 of size m and n respectively, 
//return the median of the two sorted arrays.

// Follow up: The overall run time complexity should be O(log (m+n)).

//Binary Search - Half-interval search. Recursively break down sub-arrays

// var findMedianSortedArrays = function(nums1, nums2) {
//     let nums = [...nums1, ...nums2];
//   nums.sort((a, b) => a - b);
//   if (nums.length % 2 !== 0) return nums[~~(nums.length / 2)];
//   else return (nums[~~(nums.length / 2) - 1] + nums[~~(nums.length /2)]) / 2;
// };

//The Math.floor() function returns the largest integer less than or equal to a given number.
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [...nums1, ...nums2]; // Spread operator to make copy of arrays
    nums.sort((a, b) => a - b); //Sort the arrays
    if (nums.length % 2 !== 0) return nums[Math.floor(nums.length / 2)]; // if statement to return median for odd length array
    else return (nums[Math.floor(nums.length / 2) - 1] + nums[Math.floor(nums.length /2)]) / 2;
};

nums1 = [1, 2, 3, 4, 5, 6, 8]
nums2 = [0, 0, 0, 0, 10, 10]

console.log(findMedianSortedArrays(nums1, nums2));