reduceFun = (arr, callback, initialVal) => {
    let newArr = [...arr];
    accumulator = (initialVal === undefined) ? newArr.shift() : initialVal;

    for (let val of newArr) {
        accumulator = callback(accumulator, val);
    }
    return accumulator;
}

let arr = [1, 2, 3, 4, 5];

sum = (val1, val2) => val1 + val2

let result = reduceFun(arr, sum);

console.log(result);