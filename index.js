/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let rowCount = 0;
  let totalRows = nums.length - 1;
  while (totalRows > 0) {
    for (let i = 0; i < nums.length - 1 - rowCount; i++) {
      let a = nums[rowCount];
      let b = nums[i + rowCount + 1];
      if (a + b == target) {
        return [nums.indexOf(a), i + rowCount + 1];
      }
    }
    totalRows -= 1;
    rowCount += 1;
  }
};
