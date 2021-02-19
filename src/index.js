
exports.min = function min (numbers) {
    if (numbers === undefined || numbers.length === 0) {
        return 0;
    }
    let minNum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < minNum) {
            minNum = numbers[i];
        }
    }
    return minNum;
}

exports.max = function max (numbers) {
    if (numbers === undefined || numbers.length === 0) {
        return 0;
    }
    let maxNum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
    }
    return maxNum;
}

exports.avg = function avg (numbers) {
    if (numbers === undefined || numbers.length === 0) {
        return 0;
    }
    let len = numbers.length;
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return (sum / len);
}
