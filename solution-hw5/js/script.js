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

const rollsDataInCart = [
    { type: "Original", glazing: "Sugar milk", size: 1, basePrice: 2.49 },
    { type: "Walnut", glazing: "Vanilla milk", size: 12, basePrice: 3.49 },
    { type: "Raisin", glazing: "Sugar milk", size: 3, basePrice: 2.99 },
    { type: "Apple", glazing: "Original", size: 3, basePrice: 3.49 }
];

const cart = [];

for (let i = 0; i < rollsDataInCart.length; i++) {
    const rollData = rollsDataInCart[i];
    const imageFile = rolls[rollData.type].imageFile;
    const imageURL = `/pui-homework/solution-hw5/assets/products/${imageFile}`;

    const roll = new Roll(imageURL, rollData.type, rollData.glazing, rollData.size, rollData.basePrice);
    cart.push(roll);

    createElement(roll);
}

function createElement(roll) {
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector('.cartItemContainer');

    const rollListElement = document.querySelector('#roll-list');
    rollListElement.prepend(roll.element);

    updateElement(roll);

    const btnDelete = roll.element.querySelector('.remove');
    btnDelete.addEventListener('click', () => {
        removeRoll(roll);
    });

    updateCartTotal();
}

function updateElement(roll) {
    const rollImageElement = roll.element.querySelector('.cartImg');
    const rollTitleElement = roll.element.querySelector('.cartTitle');
    const rollGlazingElement = roll.element.querySelector('.cartGlazing');
    const rollPackSizeElement = roll.element.querySelector('.cartPackSize');
    const rollPriceElement = roll.element.querySelector('.price');

    rollImageElement.src = roll.imageURL;
    rollTitleElement.innerText = roll.type + " Cinnamon Roll";
    rollGlazingElement.innerText = roll.glazing;
    rollPackSizeElement.innerText = roll.size;

    const calculatedPrice = roll.calculatePrice(glazing, packSize);
    rollPriceElement.innerText = `$${calculatedPrice.toFixed(2)}`;
}

function updateCartTotal() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        const roll = cart[i];
        total += roll.calculatePrice(glazing, packSize);
    }

    const totalPriceElement = document.querySelector("#totalPrice p:last-child");
    totalPriceElement.innerText = `$${total.toFixed(2)}`;
}

function removeRoll(roll) {
    roll.element.remove();

    const rollIndex = cart.indexOf(roll);
    if (rollIndex !== -1) {
        cart.splice(rollIndex, 1);
    }

    updateCartTotal();
}
