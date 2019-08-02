// Implement a function that filters array based on callback result.

 const filter = (array, callback, thisArg) => {
    let result = [];
    for (let i = 0, length = array.length; i < length; i++) {
        if (callback.call(thisArg, array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
};

const data = ['hello', 'Hi', 'JavaScript', 'whatsup', '!'];

const result = filter(data, str => str.length > 5);

console.log(result); // [ 'JavaScript', 'whatsup' ]

// built-in alternative : Array​.prototype​.filter()

const defaultFilter = data.filter(str => str.length > 5);
console.log(defaultFilter); // [ 'JavaScript', 'whatsup' ]

//export {filter};