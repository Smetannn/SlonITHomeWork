function upFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(upFirstLetter("привет")); // Привет

function truncateString(str, maxLength) {

    if (str.length <= maxLength) return str;

    let truncated = str.slice(0, maxLength);
    let lastSpaceIndex = Math.max(
        truncated.lastIndexOf(' '), truncated.lastIndexOf(','),
        truncated.lastIndexOf('.'), truncated.lastIndexOf('!'),
        truncated.lastIndexOf('?'), truncated.lastIndexOf(':'),
        truncated.lastIndexOf(';'));

    if (lastSpaceIndex !== -1) {
        return truncated.slice(0, lastSpaceIndex) + '...';
    }

    return truncated + '...';
}
console.log(truncateString("Это очень длинная строка, которая не помещается в заданный размер.", 40)); 

function isSubstring(str1, str2) {
    return str1.includes(str2) || str2.includes(str1);
}

console.log(isSubstring("привет", "привет, мир!")); // true
