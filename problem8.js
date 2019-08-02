// Sum of random numbers

import {reduce} from './problem3.js';
import {map} from './problem5.js';

const getRandomNumber = parameter => Math.floor(Math.random() * parameter);

const createArray = length => new Array(length).fill(null);

const array = map(createArray(10), x => getRandomNumber(10));

//console.log(array);

const answer = reduce(array, (result, current) => +result + current, 0);

console.log(answer);

// functions implemented for previous problems : reduce(problem3) 
