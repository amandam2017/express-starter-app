const assert = require('assert');

const pizzaFactory = require('../pizzaCart');

describe('pizza-cart', function(){

    const PizzaInstance = pizzaFactory();

    it('should be able to set the pizzas', function(){
        PizzaInstance.setPizzas({
            smallCost : 31.99,
            mediumCost : 58.99,
            largeCost : 87.99
        });

        assert.deepEqual({
            smallCost : 31.99,
            mediumCost : 58.99,
            largeCost : 87.99

        }, PizzaInstance.getPizzas())
    });

    

    it('should display the total for each pizza', function(){
        const PizzaInstance = pizzaFactory();

        PizzaInstance.setPizzas({
            smallCost : 31.99,
            mediumCost : 58.99,
            largeCost : 87.99
        });

        PizzaInstance.buyingPizza('small');
        PizzaInstance.buyingPizza('medium');
        PizzaInstance.buyingPizza('large');
        

        assert.equal(31.99, PizzaInstance.pizzaTotals());
        assert.equal(58.99, PizzaInstance.pizzaTotals());
        assert.equal(87.99, PizzaInstance.pizzaTotals());
        assert.equal(178.97, PizzaInstance.pizzaTotals());

    });

    
});
// ends here
