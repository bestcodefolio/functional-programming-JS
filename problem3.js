// Linear fold

const reduce = (array, callback, startValue) => {
    let result = startValue;
    for(let i = 0, length = array.length; i < length; i++){
        result = callback.call(null, result, array[i], i, array);
    }
    return result;
};

const arrays = [[1, 2, 3], [4, 5], [6], [7, 8], [9, 10]];
const strings = ['Hello', 'world'];

const arraysResult = reduce(arrays, (result, current) => {
    return result.concat(current);
}, []);

const stringsResult = reduce(strings, (phrase, word, index) => {
  return (index === 0) ? phrase + word : phrase + ' ' + word;
}, '');  

console.log(arraysResult); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(stringsResult); // Hello world

// built-in alternative : Array​.prototype​.reduce()

const defaultReduce = strings.reduce((phrase, word, index) => {
    return (index === 0) ? phrase + word : phrase + ' ' + word;
});

console.log(defaultReduce); // Hello world

export {reduce};