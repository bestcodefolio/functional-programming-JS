// Partial Application

const sum = (...args) => args.reduce((result, current) => +result + current);

const binding = (func, ...args) => (...funcArgs) => {
    return func.call(this, ...args, ...funcArgs);
};

const bindedSum = binding(sum, 20, 30); 
const bindedSeconsStep = binding(bindedSum, 10);

console.log(bindedSum(40, 50, 60)); // 20 + 30 + 40 + 50 + 60 
console.log(bindedSeconsStep(10, 15)); // 20 + 30 + 10 + 10 + 15

// built-in alternative : Function​.prototype​.bind()

const bindedClassic = sum.bind(null, 10);
const bindedClSecondStep = bindedClassic.bind(null, 10);

console.log(bindedClassic(100)); // 10 + 100
console.log(bindedClSecondStep(100)); // 10 + 10 + 100
