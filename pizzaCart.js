'use strict';

module.exports = function Pizzas(){

    let smallCost = 0;
    let mediumCost = 0;
    let largeCost = 0;

    function setPizzas (pizzas) {
        smallCost = Number(pizzas.smallCost);
        mediumCost = Number(pizzas.mediumCost);
        largeCost = Number(pizzas.largeCost);
    }

    function getPizzas() {
        return {
            smallCost,
            mediumCost,
            largeCost
        }
    }

    function buyingPizza(pizzaSize) {

        if (pizzaSize === 'small'){
            smallCost += 31.99;
        }
        else if (pizzaSize === 'medium' ){
            mediumCost += 58.99;
        }
        else if (pizzaSize === 'large' ){
            largeCost += 87.99;
        }
    }

    function grandPizzaTotal(){

        return smallCost +  smallCost + smallCost;
    }

    function getsmallCostTotal(){
        return smallCost;   
    }

    function getMediumCostTotal(){
        return mediumCost;
    }

    function getlargeCostTotal(){
        return largeCost;
    }

    // function pizzaTotals() {

    //     let smallCost = getTotal('small').toFixed(2)
    //     let mediumCost = getTotal('medium').toFixed(2)
    //     let largeCost = getTotal('large').toFixed(2)

        
    //     return {
    //         smsTotal,
    //         callTotal,
    //         grandTotal : grandTotal().toFixed(2)
    //     }
    // }


    return{
        setPizzas,
        getPizzas,
        buyingPizza,
        grandPizzaTotal,
        getsmallCostTotal,
        getMediumCostTotal,
        getlargeCostTotal,
        // pizzaTotals
    }
}