/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const dict = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (dict[complement] !== undefined) {
            return [dict[complement], i];
        }
        dict[[nums[i]]] = i;
    }

};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
