'use strict';

module.exports = function Pizzas(){

    let smallCost = 31.99;
    let mediumCost = 58.99;
    let largeCost = 87.99;


    let smallCostTotal = 0;
    let mediumCostTotal = 0;
    let largeCostTotal = 0;
    let grandTotal = 0;


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

        return smallCost +  mediumCost + largeCost;
    }

    function getsmallCostTotal(){
        // console.log(total)
        return smallCost;   
    }

    function getMediumCostTotal(){
        // console.log(mediumCost)
        return mediumCost;
    }

    function getlargeCostTotal(){
        // console.log(largeCost)
        return largeCost;
    }

    function pizzaTotals() {

        let smallCostTotal = getsmallCostTotal('small').toFixed(2)
        // console.log(smallCostTotal)
        let mediumCostTotal = getMediumCostTotal('medium').toFixed(2)
        // console.log(mediumCostTotal)
        let largeCostTotal = getlargeCostTotal('large').toFixed(2)
        // console.log(largeCostTotal)

        
        return {
            smallCostTotal,
            mediumCostTotal,
            largeCostTotal,
            grandTotal : grandPizzaTotal().toFixed(2)
        }
    }


    return{
        setPizzas,
        getPizzas,
        buyingPizza,
        grandPizzaTotal,
        getsmallCostTotal,
        getMediumCostTotal,
        getlargeCostTotal,
        pizzaTotals
    }
}