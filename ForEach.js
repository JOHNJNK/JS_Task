forEachFun = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

let arr = ["red", "blue", "green", "orange", "white", "black"];

printFun = (e) => console.log(e);

forEachFun(arr, printFun);