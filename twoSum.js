/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
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

  console.log((twoSum([2, 7, 11, 15], 9)))