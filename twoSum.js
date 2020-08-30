// Given an array of integers nums and and integer target, return the indices 
// of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may 
//not use the same element twice.
// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1]

 //Solution 1 - One Pass Hash Table with time complexity O(n)
var twoSum = function(nums, target) {
    const indicies = {}
    
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      if (indicies[target - num] != null) {
        return [indicies[target - num], i]
      }
      indicies[num] = i
    }
  };

  console.log(twoSum([2, 7, 11, 15], 9));