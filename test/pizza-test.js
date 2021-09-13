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



    
});
// ends here
