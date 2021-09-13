'use strict';

module.exports = function Pizzas(){

    let smallCost;
    let mediumCost;
    let largeCost;

    function addPizzas(pizzaSize) {
        let smallCost = 31.99;
        let mediumCost = 58.99;
        let largeCost = 87.99;

        if (pizzaSize === 'small'){
            cost = smallCost;
        }
        else if (pizzaSize === 'medium' ){
            cost = mediumCost;
        }
        else if (pizzaSize === 'large' ){
            cost = largeCost;
        }
    }

    function grandPizzaTotal(){

        return smallCost +  smallCost + smallCost;
    }

    function getsmallCost(){
        return smallCost;   
    }

    function getMediumCost(){
        return mediumCost;
    }

    function getlargeCost(){
        return largeCost;
    }


    return{
        addPizzas,
        grandPizzaTotal,
        getsmallCost,
        getMediumCost,
        getlargeCost
    }
}