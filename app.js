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

const bTIValue = document.getElementById("bTI-value");
const sUPMValue = document.getElementById("sUPM-value");
const cUPMValue = document.getElementById("cUPM-value");
const sOUAValue = document.getElementById("sOUA-value");
const cOUAValue = document.getElementById("cOUA-value");
const sFFScFFSValue = document.getElementById("sFFScFFS-value");
const s70c30SCValue = document.getElementById("s70c30SC-value");
const s30c70SCValue = document.getElementById("s30c70SC-value");

const iteration1Output = document.getElementById("iteration1-value");
const iteration2Output = document.getElementById("iteration2-value");
const iteration3Output = document.getElementById("iteration3-value");
const iteration4Output = document.getElementById("iteration4-value");
const iteration5Output = document.getElementById("iteration5-value");

const iteration1OutputDiv = document.getElementById("iteration1-div");
const iteration2OutputDiv = document.getElementById("iteration2-div");
const iteration3OutputDiv = document.getElementById("iteration3-div");
const iteration4OutputDiv = document.getElementById("iteration4-div");
const iteration5OutputDiv = document.getElementById("iteration5-div");

const iteration1OutputTitle = document.getElementById("iteration1-title");
const iteration2OutputTitle = document.getElementById("iteration2-title");
const iteration3OutputTitle = document.getElementById("iteration3-title");
const iteration4OutputTitle = document.getElementById("iteration4-title");
const iteration5OutputTitle = document.getElementById("iteration5-title");


let iteration1SAmount = 0;
let iteration2SAmount = 0;
let iteration3SAmount = 0;
let iteration4SAmount = 0;
let iteration5SAmount = 0;
let iteration1CAmount = 0;
let iteration2CAmount = 0;
let iteration3CAmount = 0;
let iteration4CAmount = 0;
let iteration5CAmount = 0;

sOUADiv = document.getElementById("soua-div");
cOUADiv = document.getElementById("coua-div");
fiftyDiv = document.getElementById("fifty-div");
split73Div = document.getElementById("split73-div");
split37Div = document.getElementById("split37-div");

runItButton.addEventListener('click', function() {
    beforeTaxIncome = Math.round((profitSlider.value / ((100 - taxSlider.value) / 100)) * 1) / 1 + 1;
    console.log("Total income before tax is $" + beforeTaxIncome);
    bTIValue.innerText = "$" + beforeTaxIncome;

    standardProfit = standardPriceSlider.value - standardCostSlider.value;
    //console.log("Standard Unit Profit Margin is " + standardProfit);
    sUPMValue.innerText = "$" + standardProfit;

    customProfit = customPriceSlider.value - customCostSlider.value;
    //console.log("custom Unit Profit Margin is " + customProfit);
    cUPMValue.innerText = "$" + customProfit;

    if (standardOnlyCheck === 1) {
        sOUADiv.style.display = "block";

        sOnlyAmount = Math.round(beforeTaxIncome / standardProfit * 1) / 1 + 1; 
        //console.log("Only-standard units required is " + sOnlyAmount);
        sOUAValue.innerText = sOnlyAmount;
    };
    if (customOnlyCheck === 1) {
        cOUADiv.style.display = "block";

        cOnlyAmount = Math.round(beforeTaxIncome / customProfit * 1) / 1 + 1; 
        //console.log("Only-custom units required is " + cOnlyAmount);
        cOUAValue.innerText = cOnlyAmount;
    };
    if (fiftyFiftyCheck === 1) {
        fiftyDiv.style.display = "block";

        fiftyFiftySAmount = Math.round((beforeTaxIncome / 2) / standardProfit *1) /1 + 1;
        fiftyFiftyCAmount = Math.round((beforeTaxIncome / 2) / customProfit *1) /1 + 1;
        //console.log("50/50 split is " + fiftyFiftySAmount + " standard units and " + fiftyFiftyCAmount + " custom units");
        sFFScFFSValue.innerText = fiftyFiftySAmount + " / " + fiftyFiftyCAmount;
    };
    if (s70c30Check === 1) {
        split73Div.style.display = "block";

        s70c30SAmount = Math.round((beforeTaxIncome * 0.7) / standardProfit *1) / 1 +1;
        s70c30CAmount = Math.round((beforeTaxIncome * 0.3) / customProfit *1) / 1 +1;
        //console.log("70/30 standard/custom split requires " + s70c30SAmount + " standard units and " + s70c30CAmount + " custom units");
        s70c30SCValue.innerText = s70c30SAmount + " / " + s70c30CAmount;
    };
    if (s30c70Check === 1) {
        split37Div.style.display = "block";

        s30c70SAmount = Math.round((beforeTaxIncome * 0.3) / standardProfit *1) / 1 +1;
        s30c70CAmount = Math.round((beforeTaxIncome * 0.7) / customProfit *1) / 1 +1;
        //console.log("30/70 standard/custom split requires " + s30c70SAmount + " standard units and " + s30c70CAmount + " custom units");
        s30c70SCValue.innerText = s30c70SAmount + " / " + s30c70CAmount;
    };

    if (iterationCount >= 1) {
        iteration1OutputDiv.style.display = "block";
        iteration1OutputTitle.innerText = iteration1Slider.value + "/" + (100 - iteration1Slider.value) + " Standard/Custom Split:";

        iteration1SAmount = Math.round((beforeTaxIncome * (iteration1Slider.value / 100)) / standardProfit *1) / 1 +1;
        iteration1CAmount = Math.round((beforeTaxIncome * ((100 - iteration1Slider.value) / 100)) / customProfit *1) / 1 +1;

        iteration1Output.innerText = iteration1SAmount + " / " + iteration1CAmount;
    };
    if (iterationCount >= 2) {
        iteration2OutputDiv.style.display = "block";
        iteration2OutputTitle.innerText = iteration2Slider.value + "/" + (100 - iteration2Slider.value) + " Standard/Custom Split:";

        iteration2SAmount = Math.round((beforeTaxIncome * (iteration2Slider.value / 100)) / standardProfit *1) / 1 +1;
        iteration2CAmount = Math.round((beforeTaxIncome * ((100 - iteration2Slider.value) / 100)) / customProfit *1) / 1 +1;

        iteration2Output.innerText = iteration2SAmount + " / " + iteration2CAmount;
    };
    if (iterationCount >= 3) {
        iteration3OutputDiv.style.display = "block";
        iteration3OutputTitle.innerText = iteration3Slider.value + "/" + (100 - iteration3Slider.value) + " Standard/Custom Split:";

        iteration3SAmount = Math.round((beforeTaxIncome * (iteration3Slider.value / 100)) / standardProfit *1) / 1 +1;
        iteration3CAmount = Math.round((beforeTaxIncome * ((100 - iteration3Slider.value) / 100)) / customProfit *1) / 1 +1;

        iteration3Output.innerText = iteration3SAmount + " / " + iteration3CAmount;
    };
    if (iterationCount >= 4) {
        iteration4OutputDiv.style.display = "block";
        iteration4OutputTitle.innerText = iteration4Slider.value + "/" + (100 - iteration4Slider.value) + " Standard/Custom Split:";

        iteration4SAmount = Math.round((beforeTaxIncome * (iteration4Slider.value / 100)) / standardProfit *1) / 1 +1;
        iteration4CAmount = Math.round((beforeTaxIncome * ((100 - iteration4Slider.value) / 100)) / customProfit *1) / 1 +1;

        iteration4Output.innerText = iteration4SAmount + " / " + iteration4CAmount;
    };
    if (iterationCount >= 5) {
        iteration5OutputDiv.style.display = "block";
        iteration5OutputTitle.innerText = iteration5Slider.value + "/" + (100 - iteration5Slider.value) + " Standard/Custom Split:";

        iteration5SAmount = Math.round((beforeTaxIncome * (iteration5Slider.value / 100)) / standardProfit *1) / 1 +1;
        iteration5CAmount = Math.round((beforeTaxIncome * ((100 - iteration5Slider.value) / 100)) / customProfit *1) / 1 +1;

        iteration5Output.innerText = iteration5SAmount + " / " + iteration5CAmount;
    };

    if (standardOnlyCheck === 0) {
        sOUADiv.style.display = "none";
    };
    if (customOnlyCheck === 0) {
        cOUADiv.style.display = "none";
    };
    if (fiftyFiftyCheck === 0) {
        fiftyDiv.style.display = "none";
    };
    if (s70c30Check === 0) {
        split73Div.style.display = "none";
    };
    if (s30c70Check === 0) {
        split37Div.style.display = "none";
    };
    
});


const addIterationButton = document.getElementById("add-iteration-button");
const iteration1InputDiv = document.getElementById("iteration1-input-div");
const iteration2InputDiv = document.getElementById("iteration2-input-div");
const iteration3InputDiv = document.getElementById("iteration3-input-div");
const iteration4InputDiv = document.getElementById("iteration4-input-div");
const iteration5InputDiv = document.getElementById("iteration5-input-div");
let iterationCount = 0;

addIterationButton.addEventListener('click', function() {
    iterationCount = iterationCount + 1;
    console.log("The iteration count is " + iterationCount);

    if (iterationCount === 1) {
        iteration1InputDiv.style.display = "block";
    };
    if (iterationCount === 2) {
        iteration2InputDiv.style.display = "block";
    };
    if (iterationCount === 3) {
        iteration3InputDiv.style.display = "block";
    };
    if (iterationCount === 4) {
        iteration4InputDiv.style.display = "block";
    };
    if (iterationCount === 5) {
        iteration5InputDiv.style.display = "block";
    };
 
});

const iteration1Slider = document.getElementById("iteration1-input");
const iteration1Values = document.getElementById("iteration1-input-values");

iteration1Slider.addEventListener("input", function() {
    iteration1Values.textContent = iteration1Slider.value + " / " + (100 - iteration1Slider.value);
});

const iteration2Slider = document.getElementById("iteration2-input");
const iteration2Values = document.getElementById("iteration2-input-values");

iteration2Slider.addEventListener("input", function() {
    iteration2Values.textContent = iteration2Slider.value + " / " + (100 - iteration2Slider.value);
});

const iteration3Slider = document.getElementById("iteration3-input");
const iteration3Values = document.getElementById("iteration3-input-values");

iteration3Slider.addEventListener("input", function() {
    iteration3Values.textContent = iteration3Slider.value + " / " + (100 - iteration3Slider.value);
});

const iteration4Slider = document.getElementById("iteration4-input");
const iteration4Values = document.getElementById("iteration4-input-values");

iteration4Slider.addEventListener("input", function() {
    iteration4Values.textContent = iteration4Slider.value + " / " + (100 - iteration4Slider.value);
});

const iteration5Slider = document.getElementById("iteration5-input");
const iteration5Values = document.getElementById("iteration5-input-values");

iteration5Slider.addEventListener("input", function() {
    iteration5Values.textContent = iteration5Slider.value + " / " + (100 - iteration5Slider.value);
});



remove1Button = document.getElementById("remove-iteration1");
remove2Button = document.getElementById("remove-iteration2");
remove3Button = document.getElementById("remove-iteration3");
remove4Button = document.getElementById("remove-iteration4");
remove5Button = document.getElementById("remove-iteration5");

remove1Button.addEventListener('click', function() {
    iteration1InputDiv.style.display = "none";
    iteration1OutputDiv.style.display = "none";
});
remove2Button.addEventListener('click', function() {
    iteration2InputDiv.style.display = "none";
    iteration2OutputDiv.style.display = "none";
});
remove3Button.addEventListener('click', function() {
    iteration3InputDiv.style.display = "none";
    iteration3OutputDiv.style.display = "none";
});
remove4Button.addEventListener('click', function() {
    iteration4InputDiv.style.display = "none";
    iteration4OutputDiv.style.display = "none";
});
remove5Button.addEventListener('click', function() {
    iteration5InputDiv.style.display = "none";
    iteration5OutputDiv.style.display = "none";
});