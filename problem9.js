// Implement a function that returns the first element in array that satisfies given condition.

const find = (array, func) => {
    for(const item of array){
        if (func(item)){
            return item;
        }
    }
    return 'There is no such element';
};

const array = [1, 2, 3, 2, 5, 4, 6];

const answer = find(array, item => item > 3);

console.log(answer);