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

let obj = {
    name: 'Vasya',
    friends: 5,
    likes: 19, 
    projects: 7,
}
console.log(sumNumbersObject(obj));