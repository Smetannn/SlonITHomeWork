function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}


function sumNumbersObject(obj) {
    if (!isEmpty(obj)) {
        let sum=0;
        for(let key in obj){
            if(typeof(obj[key])=='number'){
                sum+=obj[key];
            }
        }
        return sum;
    } else {
        return 0;
    }
}
function nameNumbersObject(obj) {
    if (!isEmpty(obj)) {
        let arr = [];

        for (let key in obj) {
            if (typeof obj[key] === 'number') {
                arr.push({ key: key, value: obj[key] });
            }
        }

        arr.sort((a, b) => b.value - a.value);

        return arr.map(item => item.key);
    } else {
        return [];
    }
}


let obj = {
    name: 'Vasya',
    friends: 5,
    likes: 19, 
    projects: 7,
}
console.log(sumNumbersObject(obj));
console.log(nameNumbersObject(obj));