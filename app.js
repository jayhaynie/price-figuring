document.addEventListener('DOMContentLoaded', () => {
	
})

const profitSlider = document.getElementById("year-profit");
const profitValue = document.getElementById("profit-value");

profitSlider.addEventListener("input", function() {
    profitValue.textContent = profitSlider.value;
});

const taxSlider = document.getElementById("tax-percent");
const taxValue = document.getElementById("tax-value");

taxSlider.addEventListener("input", function() {
    taxValue.textContent = taxSlider.value;
});

const standardCostSlider = document.getElementById("standard-cost");
const standardCostValue = document.getElementById("standard-cost-value");

standardCostSlider.addEventListener("input", function() {
    standardCostValue.textContent = standardCostSlider.value;
});

const standardPriceSlider = document.getElementById("standard-price");
const standardPriceValue = document.getElementById("standard-price-value");

standardPriceSlider.addEventListener("input", function() {
    standardPriceValue.textContent = standardPriceSlider.value;
});

const customCostSlider = document.getElementById("custom-cost");
const customCostValue = document.getElementById("custom-cost-value");

customCostSlider.addEventListener("input", function() {
    customCostValue.textContent = customCostSlider.value;
});

const customPriceSlider = document.getElementById("custom-price");
const customPriceValue = document.getElementById("custom-price-value");

customPriceSlider.addEventListener("input", function() {
    customPriceValue.textContent = customPriceSlider.value;
});


const standardOnly = document.getElementById("standard-only");
const customOnly = document.getElementById("custom-only");
const fiftyFifty = document.getElementById("fifty-fifty");
const s70c30 = document.getElementById("s70-c30");
const s30c70 = document.getElementById("s30-c70");

let standardOnlyCheck = 0;
let customOnlyCheck = 0;
let fiftyFiftyCheck = 0;
let s70c30Check = 0;
let s30c70Check = 0;

standardOnly.addEventListener('click', function() {
    if (standardOnlyCheck === 0) {
        standardOnlyCheck = 1;
    } else {
        standardOnlyCheck = 0;
    };
    //console.log("standardOnly value is " + standardOnlyCheck);
});
customOnly.addEventListener('click', function() {
    if (customOnlyCheck === 0) {
        customOnlyCheck = 1;
    } else {
        customOnlyCheck = 0;
    };
    //console.log("customOnly value is " + customOnlyCheck);
});
fiftyFifty.addEventListener('click', function() {
    if (fiftyFiftyCheck === 0) {
        fiftyFiftyCheck = 1;
    } else {
        fiftyFiftyCheck = 0;
    };
    //console.log("fiftyFifty value is " + fiftyFiftyCheck);
});
s70c30.addEventListener('click', function() {
    if (s70c30Check === 0) {
        s70c30Check = 1;
    } else {
        s70c30Check = 0;
    };
    //console.log("s70c30 value is " + s70c30Check);
});
s30c70.addEventListener('click', function() {
    if (s30c70Check === 0) {
        s30c70Check = 1;
    } else {
        s30c70Check = 0;
    };
    //console.log("s30c70 value is " + s30c70Check);
});
// Math.round(*1) / 1 +1;


const runItButton = document.getElementById("run-it-button");
let beforeTaxIncome = 0;
let standardProfit = 0;
let customProfit = 0;
let sOnlyAmount = 0;
let cOnlyAmount = 0;
let fiftyFiftySAmount = 0;
let fiftyFiftyCAmount = 0;
let s70c30SAmount = 0;
let s70c30CAmount = 0;
let s30c70SAmount = 0;
let s30c70CAmount = 0;

runItButton.addEventListener('click', function() {
    beforeTaxIncome = Math.round((profitSlider.value / ((100 - taxSlider.value) / 100)) * 1) / 1 + 1;
    console.log("Total income before tax is $" + beforeTaxIncome);

    standardProfit = standardPriceSlider.value - standardCostSlider.value;
    //console.log("Standard Unit Profit Margin is " + standardProfit);

    customProfit = customPriceSlider.value - customCostSlider.value;
    //console.log("custom Unit Profit Margin is " + customProfit);

    if (standardOnlyCheck === 1) {
        sOnlyAmount = Math.round(beforeTaxIncome / standardProfit * 1) / 1 + 1; 
        console.log("Only-standard units required is " + sOnlyAmount);
    };
    if (customOnlyCheck === 1) {
        cOnlyAmount = Math.round(beforeTaxIncome / customProfit * 1) / 1 + 1; 
        console.log("Only-custom units required is " + cOnlyAmount);
    };
    if (fiftyFiftyCheck === 1) {
        fiftyFiftySAmount = Math.round((beforeTaxIncome / 2) / standardProfit *1) /1 + 1;
        fiftyFiftyCAmount = Math.round((beforeTaxIncome / 2) / customProfit *1) /1 + 1;
        console.log("50/50 split is " + fiftyFiftySAmount + " standard units and " + fiftyFiftyCAmount + " custom units");
    };
    if (s70c30Check === 1) {
        s70c30SAmount = Math.round((beforeTaxIncome * 0.7) / standardProfit *1) / 1 +1;
        s70c30CAmount = Math.round((beforeTaxIncome * 0.3) / standardProfit *1) / 1 +1;
        console.log("70/30 standard/custom split requires " + s70c30SAmount + " standard units and " + s70c30CAmount + " custom units");
    };
    if (s30c70Check === 1) {
        s30c70SAmount = Math.round((beforeTaxIncome * 0.7) / standardProfit *1) / 1 +1;
        s30c70CAmount = Math.round((beforeTaxIncome * 0.3) / standardProfit *1) / 1 +1;
        console.log("30/70 standard/custom split requires " + s30c70SAmount + " standard units and " + s30c70CAmount + " custom units");
    };
});