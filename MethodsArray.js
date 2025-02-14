function mySlice(arr, start, end) {
    if (arr.length === 0) return [];
    newArr = [];
    for (let i = 0; i < end; i++) {
        if (i >= start) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
function myIndexOf(arr, item, from = 0) {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}
function myIncludes(arr, item, from = 0) {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }

    return false; 
}
arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1,3));    
console.log(mySlice(arr, 1, 3)); //[2,3]
console.log(arr.indexOf(3));
console.log(myIndexOf(arr, 3)); // 2
console.log(arr.includes(6));
console.log(myIncludes(arr,6));//false

