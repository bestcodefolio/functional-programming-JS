//Implement a function that creates new array with the results of calling a provided function on every element in this array.

const map = (array, callback, thisArg) => {
    let result = [];
    for (let i = 0, length = array.length; i < length; i++) {
        result.push(callback.call(thisArg, array[i], i, array)); 
    }
    return result;
};

const sqrt = map([4, 9, 25, 64], Math.sqrt);

console.log(sqrt); // [ 2, 3, 5, 8 ]

//  built-in alternative : Array​.prototype​.map()

const defaultMap = [4, 9, 25, 64].map(Math.sqrt);

console.log(defaultMap); // [ 2, 3, 5, 8 ]

export {map};