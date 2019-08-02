// Implement a function that for any given function F produces function G that caches its previous calling results.

const memoize = func => {
    const cache = {};
    
    return (...args) => { 
        const key = args;
        
        if (key in cache){
          return cache[key];
        }
        
        const result = func(...args);
        cache[key] = result;
        
        return result; 
    };
};

const sumSeq = (from, to) => {
    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += i;
    }
    return sum;
};

const obj = (obj1, obj2) => {
    return `${obj1.firstName} + ${obj1.lastName} lives at ${obj2.street} city ${obj2.city}`;
}

const objMemo = memoize(obj);

console.log(objMemo( {firstName: 'me', lastName: 'you'}, {street: '50years', city: 'Minsk'}));

console.log(objMemo( {firstName: 'me', lastName: 'you'}, {street: '50years', city: 'Minsk'}));;

console.log(objMemo( {firstName: 'fdfdd', lastName: 'fdfd'}, {street: 'fdfdf', city: 'fdfdfdf'}));;

/* const memoizedSumSeq = memoize(sumSeq);

console.log('Value: ' + sumSeq(2, 10)); 
console.log('From cache: ' + memoizedSumSeq(2, 10)); 
 */
// fix for object

