const operations = {
    'add': (a, b) => (a + b),
    'substract': (a, b) => (a - b),
    'multiply': (a, b) => (a * b),
    'divide': (a, b) => (a / b),
}

const calculate=(a,b,operation)=>operation(a,b);
const selectedOperation = "multiply";
console.log(calculate(6, 3, operations[selectedOperation])); 