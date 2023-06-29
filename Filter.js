filterFun = (arr, callback) => {
    let newArr = [];
    for (let val of arr) {
        if (callback(val)) newArr.push(val);
    }
    return newArr;
}

let array = [34, 65, 21, 45, 756, 9];

isEven = (e) => {
    return e % 2 == 0 ? true : false;
}

let result = filterFun(array, isEven);

console.log(result)