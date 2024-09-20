let glazing = [
    {
        options: "Keep original",
        priceAdaptation: 0,
    },
    {
        options: "Sugar milk",
        priceAdaptation: 0,
    },
    {
        options: "Vanilla milk",
        priceAdaptation: 0.50,
    },
    {
        options: "Double chocolate",
        priceAdaptation: 1.50,
    },
];

let packSize = [
    {
        size: 1,
        priceAdaptation: 1,
    },
    {
        size: 3,
        priceAdaptation: 3,
    },
    {
        size: 6,
        priceAdaptation: 6,
    },
    {
        size: 12,
        priceAdaptation: 10,
    },
];

function flavorDropdown() {

    let flavorSelect = document.querySelector("#flavorDropdown");

    for (i = 0; i < glazing.length; i++){

        var option = document.createElement('option');
    
        option.text = glazing[i].options;
        option.value = glazing[i].priceAdaptation;
        flavorSelect.add(option);
    }
};

function packSizeDropdown() {
    let packSelect = document.querySelector("#packSizeDropdown");

    for (i = 0; i < packSize.length; i++){

        var option = document.createElement('option');

        option.text = packSize[i].size;
        option.value = packSize[i].priceAdaptation;
        packSelect.add(option);
    }
};

function computePrice() {

    const basePrice = 2.49;

    let glazingSelect = document.querySelector("#flavorDropdown");
    let packSizeSelect = document.querySelector("#packSizeDropdown");

    let glazingPrice = parseFloat(glazingSelect.value);
    let packPrice = parseFloat(packSizeSelect.value);

    let totalPrice = (basePrice + glazingPrice) * packPrice;

    document.querySelector("#total h3").textContent = "$" + totalPrice.toFixed(2);
};

document.querySelector("#flavorDropdown").addEventListener("change", computePrice);
document.querySelector("#packSizeDropdown").addEventListener("change", computePrice);

window.onload = function() {
    flavorDropdown();
    packSizeDropdown();
    computePrice();  
};
