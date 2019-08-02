const COST_PER_SQUARE_SM_OF_PIZZA = 10;
const INGREDIENTS = {
    ketchup: 10,
    sauce: 15,
    ham: 20,
    cheese: 10,
    tomato: 5
};
const UPPING_PERCENT = 15;

const Pizza = function(ingredients) {
    this.ingredients = ingredients;

    const calculateCostOfIngredients = () => {
        return ingredients.reduce((result, current) => +result + current);
    }

    this.calculateArea = () => console.log('There is no implemented method');

    this.calculatePrice = () => {
        const square = this.calculateArea();

        const costWithOutUpping = square * COST_PER_SQUARE_SM_OF_PIZZA + calculateCostOfIngredients();
        return costWithOutUpping * (UPPING_PERCENT / 100 + 1);
    }
};

const CircledPizza = function(diameter, ingredients) {
    Pizza.call(this, ingredients); 
    this.diameter = diameter;

    this.calculateArea = () => Math.PI * (this.diameter/2) ** 2; 
};

const SquaredPizza = function(side, ingredients) {
    Pizza.call(this, ingredients);
    this.side = side;

    this.calculateArea = () => this.side ** 2;
};

const margaritaIngredients = [INGREDIENTS.ketchup, INGREDIENTS.sauce, INGREDIENTS.cheese];
const peperoniIngredients = [INGREDIENTS.ketchup, INGREDIENTS.sauce, INGREDIENTS.cheese, INGREDIENTS.ham, INGREDIENTS.tomato];

const Margarita = new CircledPizza(2, margaritaIngredients);
const Peperoni = new SquaredPizza(2, peperoniIngredients);

console.log(Margarita.calculatePrice());
console.log(Peperoni.calculatePrice()); // ((10 + 15 + 20 + 10 + 5) + 2 * 2 * 10) * 1.15 = 115
