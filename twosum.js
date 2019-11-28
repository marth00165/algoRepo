let nums = [3,3]
let target = 6

const twoSum = (nums, target) => {
    for (let index1 = 0; index1 < nums.length; index1++) {
        const num1 = nums[index1];
        for (let index = 1; index < nums.length; index++) {
            const num2 = nums[index];
            if (target - num2 === num1) {
                console.log([index1, index])
            }       
        }  
    }
};

const sumTwo = function (nums, target) {
    var numObj = new Map();
    for (var i = 0; i < nums.length; i++) {
        numObj.set(nums[i], i);
    }

    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (numObj.has(complement) && numObj.get(complement) != i) {
            console.log([i, numObj.get(complement)]);
        }
    }
    console.log([]); 
};

// sumTwo(nums,target)

twoSum(nums, target)
