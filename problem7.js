// Average of even numbers

import {reduce} from './problem3.js'
import {filter} from './problem6.js';

const array = [1, 23, 2, 6, 12, 10];

const filteredArray = filter(array, number => number % 2);

const sumOfEvens = reduce(filteredArray, (result, current) => +result + current, 0);

const answer = sumOfEvens / filteredArray.length;

console.log(answer);

// functions implemented for previous problems : reduce(problem3) + filter(problem6)