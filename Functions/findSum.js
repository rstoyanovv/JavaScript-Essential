function findSum(num) {
    let sum = 0;

    function internalSum(number) {
        sum += number;
        return internalSum;
    }

    internalSum.toString = () => {
        return sum;
    }

    return internalSum(num);
}

console.log(findSum(2)(3)(-1).toString());
