'use strict';

module.exports = function Pizzas(){

    let smallTotal = 0
    let mediumTotal = 0;
    let largeTotal = 0;

    let smallCounter= 0;
    let largeCounter = 0;
    let mediumCounter = 0;


    // function setPizzas (pizzas) {
    //     smallCost = Number(pizzas.smallCost);
    //     mediumCost = Number(pizzas.mediumCost);
    //     largeCost = Number(pizzas.largeCost);
    // }

    // function getPizzas() {
    //     return {
    //         smallCost,
    //         mediumCost,
    //         largeCost
    //     }
    // }

    function buyingPizza(pizzaSize) {

        if (pizzaSize === 'small'){
            smallTotal += 31.99;
            smallCounter++
        }
        else if (pizzaSize === 'medium' ){
            mediumTotal += 58.99;
            mediumCounter++
        }
        else if (pizzaSize === 'large' ){
            largeTotal += 87.99;
            largeCounter++
        }
    }

    function grandPizzaTotal(){

        return smallTotal +  mediumTotal + largeTotal;
    }

    function getsmallCostTotal(){
        return smallTotal;   
    }

    function getMediumCostTotal(){
        // console.log(mediumCost)
        return mediumTotal;
    }

    function getlargeCostTotal(){
        // console.log(largeCost)
        return largeTotal;
    }

    function pizzaTotals() {

        let smallCostTotal = 0;
        let mediumCostTotal = 0;
        let largeCostTotal = 0;
        // let grandTotal = 0;

        smallCostTotal = getsmallCostTotal('small').toFixed(2)
        // console.log(smallCostTotal)
        mediumCostTotal = getMediumCostTotal('medium').toFixed(2)
        // console.log(mediumCostTotal)
        largeCostTotal = getlargeCostTotal('large').toFixed(2)
        // console.log(largeCostTotal)

        
        return {
            smallCostTotal,
            mediumCostTotal,
            largeCostTotal,
            grandTotal : grandPizzaTotal().toFixed(2)
        }
    }


    return{
        // setPizzas,
        // getPizzas,
        buyingPizza,
        grandPizzaTotal,
        getsmallCostTotal,
        getMediumCostTotal,
        getlargeCostTotal,
        pizzaTotals
    }
}