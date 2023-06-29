mapFun = (arr, callback) => {

    let newArr = []
    for (let val of arr) {
        newArr.push((callback(val)));
    }
    return newArr;
}

multiOfTwo = (e) => e * 2;

let array = [1, 2, 3, 4, 5];

let arr = mapFun(array, multiOfTwo)

console.log(arr);