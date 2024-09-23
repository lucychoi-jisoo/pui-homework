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

    for (let i = 0; i < glazing.length; i++){

        let option = document.createElement('option');
    
        option.text = glazing[i].options;
        option.value = glazing[i].priceAdaptation;
        flavorSelect.add(option);
    }
};

function packSizeDropdown() {
    let packSelect = document.querySelector("#packSizeDropdown");

    for (let i = 0; i < packSize.length; i++){

        let option = document.createElement('option');

        option.text = packSize[i].size;
        option.value = packSize[i].priceAdaptation;
        packSelect.add(option);
    }
};

function glazingChange(element) {
    const glazingPrice = parseFloat(element.value);

    const packSizeSelect = document.querySelector("#packSizeDropdown");
    const packPrice = parseFloat(packSizeSelect.value);

    const basePrice = 2.49;

    const totalPrice = (basePrice + glazingPrice) * packPrice;

    document.querySelector("#total h3").textContent = "$" + totalPrice.toFixed(2);
};

function packSizeChange(element) {
    const packPrice = parseFloat(element.value);

    const glazingSelect = document.querySelector("#flavorDropdown");
    const glazingPrice = parseFloat(glazingSelect.value);

    const basePrice = 2.49;

    const totalPrice = (basePrice + glazingPrice) * packPrice;

    document.querySelector("#total h3").textContent = "$" + totalPrice.toFixed(2);
}

document.querySelector("#flavorDropdown").addEventListener("change", function(){
    glazingChange(this);
});
document.querySelector("#packSizeDropdown").addEventListener("change", function(){
    packSizeChange(this);
});

window.onload = function() {
    flavorDropdown();
    packSizeDropdown();
    glazingChange(document.querySelector("#flavorDropdown"));  
};


