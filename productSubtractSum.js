let nums = 234


let subtractProductAndSum = (number) => {

    let numbers = number.toString(10).split("").map((t) => { return parseInt(t) }) 
    const getSum = (total, num) => {
            return total + num;   
        }
    const getProduct = (total, num) => {
        return total * num;
    }

    let sum = numbers.reduce(getSum)
    let product = numbers.reduce(getProduct)
    let answer = (product - sum)
    return answer
};

subtractProductAndSum(nums)