let nums = [3, 2, 2, 3];
let val = 3;

const removeElement = function (nums, val) {
    const length = nums.length
    for (let index = 0; index < length; index++) {
        const element = nums[0]
        if (element === val) {
            nums.shift()
        }
        else {
            nums.shift()
            nums.push(element)
        }
    }
    return nums.length
};