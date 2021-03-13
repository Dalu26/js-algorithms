/*
Given an array of integers `nums` and an integer `target`, return  _indices of the two numbers such that they add up to `target`_.
You may assume that each input would have  **_exactly_  one solution**, and you may not use the  _same_  element twice.
You can return the answer in any order.

**Example 1:**
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Output: Because nums[0] + nums[1] == 9, we return [0, 1]
    
**Example 2:**
    Input: nums = [3,2,4], target = 6
    Output: [1,2]
    
**Example 3:**
  Input: nums = [3,3], target = 6
  Output: [0,1]
 
*/

// Unoptimized solution
function getIndices(numsArr, target) {
  for(let i = 0; i < numsArr.length; i++) {
    for(let j = i + 1; j < numsArr.length; j++) {
      if(numsArr[i] + numsArr[j] === target) {
        return [i, j]
      }
    }
  }
}

// Optimized solution
function getIndices(numsArr, target) {
  const seen = {};

  for(let i = 0; i < numsArr.length; i++) {
    const diff = target - numsArr[i];
  
    if(seen[diff] !== undefined) {
      return [seen[diff], i]
    }

    seen[numsArr[i]] = i
  }
}

const arr = [2,7,11,15];
getIndices(arr, 9);
