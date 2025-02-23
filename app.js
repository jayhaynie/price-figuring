document.addEventListener('DOMContentLoaded', () => {
	
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

})