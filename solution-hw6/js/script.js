let cart = [];

class Roll {
    constructor(imageURL, rollType, glazingType, packSize, basePrice) {
        this.imageURL = imageURL;
        this.type = rollType;
        this.glazing = glazingType;
        this.size = packSize;
        this.basePrice = basePrice;
    }

    calculatePrice(glazingOptions, packSizeOptions) {
        let glazingPrice = 0;
        let packSizePrice = 1; 

        // Glazing price
        for (let i = 0; i < glazingOptions.length; i++) {
            if (glazingOptions[i].options === this.glazing) {
                glazingPrice = glazingOptions[i].priceAdaptation;
                break;
            }
        }

        // Pack size price
        for (let j = 0; j < packSizeOptions.length; j++) {
            if (packSizeOptions[j].size == this.size) {
                packSizePrice = packSizeOptions[j].priceAdaptation;
                break;
            }
        }

        return (this.basePrice + glazingPrice) * packSizePrice;
    }
}

const glazing = [
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

const packSize = [
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

    for (let i = 0; i < glazing.length; i++) {
        let option = document.createElement('option');
        option.text = glazing[i].options;
        option.value = glazing[i].priceAdaptation;
        flavorSelect.add(option);
    }
}

function packSizeDropdown() {
    let packSelect = document.querySelector("#packSizeDropdown");

    for (let i = 0; i < packSize.length; i++) {
        let option = document.createElement('option');
        option.text = packSize[i].size;
        option.value = packSize[i].size;
        packSelect.add(option);
    }
}

function glazingChange(element) {
    const rollType = getRollTypeFromURL();
    const basePrice = rolls[rollType].basePrice;
    const glazingPrice = parseFloat(element.value);

    const packSizeSelect = document.querySelector("#packSizeDropdown");

    let packPrice = 1; 

    if (packSizeSelect && packSizeSelect.value) {
        packPrice = parseFloat(packSizeSelect.value);
    }

    const totalPrice = (basePrice + glazingPrice) * packPrice;

    document.querySelector("#total h3").textContent = "$" + totalPrice.toFixed(2);


}

function packSizeChange(element) {
    const packPrice = parseFloat(element.value);
    const glazingSelect = document.querySelector("#flavorDropdown");
    const glazingPrice = parseFloat(glazingSelect.value);
    const rollType = getRollTypeFromURL();
    const basePrice = rolls[rollType].basePrice; 

    const totalPrice = (basePrice + glazingPrice) * packPrice;

    document.querySelector("#total h3").textContent = "$" + totalPrice.toFixed(2);
}

function getRollTypeFromURL() {
    const queryString = window.location.search; 
    const params = new URLSearchParams(queryString); 
    return params.get('roll');
}

function addToCart() {
    console.log("Document ready state:", document.readyState);

    const rollType = getRollTypeFromURL();
    const glazingSelect = document.querySelector("#flavorDropdown");
    const glazingType = glazingSelect.options[glazingSelect.selectedIndex].text; 
    const packSizeSelect = document.querySelector("#packSizeDropdown");
    const packSize = parseInt(packSizeSelect.value);
    const basePrice = rolls[rollType].basePrice; 
    const imageURL = `/pui-homework/solution-hw6/assets/products/${rolls[rollType].imageFile}`;


    const addedRoll = new Roll(imageURL, rollType, glazingType, packSize, basePrice);
    cart.push(addedRoll); 

    console.log('Cart after addition:', cart);

    localStorage.setItem('cart', JSON.stringify(cart));

    createElement(addedRoll);
    
}


function createElement(roll) {
    const template = document.querySelector('#roll-template');
    if (!template) {
        console.error('Template not found!');
        return;
    }

    const clone = template.content.cloneNode(true);
    const rollElement = clone.querySelector('.cartItemContainer');

    updateElement(roll, rollElement); 

    const rollListElement = document.querySelector('#roll-list');
    rollListElement.appendChild(rollElement);

    const btnDelete = rollElement.querySelector('.remove');
    btnDelete.addEventListener('click', () => {
        removeRoll(roll, rollElement); 
    });

    updateCartTotal();
}

function updateElement(roll, rollElement) {
    const rollImageElement = rollElement.querySelector('.cartImg');
    const rollTitleElement = rollElement.querySelector('.cartTitle');
    const rollGlazingElement = rollElement.querySelector('.cartGlazing');
    const rollPackSizeElement = rollElement.querySelector('.cartPackSize');
    const rollPriceElement = rollElement.querySelector('.price');

    rollImageElement.src = roll.imageURL;
    rollTitleElement.innerText = roll.type + " Cinnamon Roll";
    rollGlazingElement.innerText = roll.glazing;
    rollPackSizeElement.innerText = roll.size;

    const calculatedPrice = roll.calculatePrice(glazing, packSize);
    console.log('Calculated Price:', calculatedPrice); 
    rollPriceElement.innerText = `$${calculatedPrice.toFixed(2)}`;
}
function updateCartTotal() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        const rollData = cart[i];
        const roll = new Roll( 
            rollData.imageURL,
            rollData.type,
            rollData.glazing,
            rollData.size,
            rollData.basePrice
        );

        total += roll.calculatePrice(glazing, packSize);
    }

    const totalPriceElement = document.querySelector("#totalPrice p:last-child");
    totalPriceElement.innerText = `$${total.toFixed(2)}`;

    if (total === 0) {

        totalPriceElement.innerText = `$0.00`;
    } else {
        totalPriceElement.innerText = `$${total.toFixed(2)}`;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeRoll(roll, rollElement) {
    rollElement.remove();

    const rollIndex = cart.findIndex(r => r.type === roll.type && r.glazing === roll.glazing && r.size === roll.size);
    
    if (rollIndex !== -1) {
        cart.splice(rollIndex, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTotal();
}



document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        for (let rollData of cart) {
            const roll = new Roll(
                rollData.imageURL,
                rollData.type,
                rollData.glazing,
                rollData.size,
                rollData.basePrice
            );
            createElement(roll); 
        }
    }

    const rollType = getRollTypeFromURL();
    if (rollType) {
        document.querySelector("#pdpImg").src = `/solution-hw6/assets/products/${rolls[rollType].imageFile}`;
        document.querySelector(".header p").textContent = rollType + " cinnamon roll";

        // Directly set the base price in #total h3
        const basePrice = rolls[rollType].basePrice;
        document.querySelector("#total h3").textContent = `$${basePrice.toFixed(2)}`;
    }

    flavorDropdown();
    packSizeDropdown();
});

document.querySelector("#atcButton").addEventListener("click", addToCart);
document.querySelector("#flavorDropdown").addEventListener("change", function() {
    glazingChange(this);
});
document.querySelector("#packSizeDropdown").addEventListener("change", function() {
    packSizeChange(this);
});

