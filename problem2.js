//Currying

const curry = func => {
    const length = func.length;
  
    return funcToEnoughArgs = (...args) => {
        if (args.length >= length) {
          return func(...args);
        }else{
            return (...moreArgs) => {
                return funcToEnoughArgs(...args.concat(moreArgs));
            };
        }
    };
};

const add = (a, b, c, d) => a + b + c + d;
  
const curriedAdd = curry(add);
const second = curry(curriedAdd);
const third = second(10)(20)(30);

console.log(curriedAdd(1)(2)(3,4)); // 1 + 2 + 3 + 4
console.log(second(10)(20)(30)(40)); // 10 + 20 + 30 + 40
console.log(third(40)); // 10 + 20 + 30 + 40
