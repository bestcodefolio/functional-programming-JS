// Linear unfold

function unfold(func, seed) {
    let array = [], state = seed, next;
    while (next = func(state)) {
        state = next[1];
        array.push(next[0]);
    }
    return array;
}

const startIndex = 3;

const upTo = n => unfold(current => { 
    return current > n ? false : [current, current + 1];
}, startIndex);

console.log(upTo(10));