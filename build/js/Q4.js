"use strict";
// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
let calcDiscount = (productPrice) => {
    if (productPrice > 100) {
        return `$${productPrice * 0.1} discount on $${productPrice} product`;
    }
    else {
        return `$${productPrice * 0.05} discount on $${productPrice} product`;
    }
};
console.log(calcDiscount(110));
