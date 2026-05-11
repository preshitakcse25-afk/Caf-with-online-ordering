const coffeeAPI = {
    espresso: {
        name: "Espresso",
        price: 80
    },
    cappuccino: {
        name: "Cappuccino",
        price: 120
    },
    latte: {
        name: "Latte",
        price: 140
    },
    mocha: {
        name: "Mocha",
        price: 160
    },
    coldCoffee: {
        name: "Cold Coffee",
        price: 150
    },
    blackCoffee: {
        name: "Black Coffee",
        price: 70
    }
};

const addonAPI = {
    extraMilk: {
        name: "Extra Milk",
        price: 20
    },
    chocolate: {
        name: "Chocolate Syrup",
        price: 30
    },
    cream: {
        name: "Whipped Cream",
        price: 25
    },
    caramel: {
        name: "Caramel",
        price: 35
    }
};

const coffeeSelect = document.getElementById("coffee");
const quantityInput = document.getElementById("quantity");
const addonCheckboxes = document.querySelectorAll(".addon");

const summaryCoffee = document.getElementById("summaryCoffee");
const summaryQuantity = document.getElementById("summaryQuantity");
const summaryAddons = document.getElementById("summaryAddons");
const totalPrice = document.getElementById("totalPrice");
const message = document.getElementById("message");

function updateOrderSummary() {
    let selectedCoffee = coffeeSelect.value;
    let quantity = Number(quantityInput.value);

    if (quantity < 1) {
        quantity = 1;
        quantityInput.value = 1;
    }

    let coffeeName = coffeeAPI[selectedCoffee].name;
    let coffeePrice = coffeeAPI[selectedCoffee].price;

    let selectedAddons = [];
    let addonTotal = 0;

    addonCheckboxes.forEach(function(addon) {
        if (addon.checked) {
            let addonValue = addon.value;

            selectedAddons.push(addonAPI[addonValue].name);
            addonTotal = addonTotal + addonAPI[addonValue].price;
        }
    });

    let finalTotal = (coffeePrice + addonTotal) * quantity;

    summaryCoffee.textContent = coffeeName;
    summaryQuantity.textContent = quantity;

    if (selectedAddons.length === 0) {
        summaryAddons.textContent = "None";
    } else {
        summaryAddons.textContent = selectedAddons.join(", ");
    }

    totalPrice.textContent = finalTotal;
    message.textContent = "";
}

function placeOrder() {
    message.textContent = "Your order has been placed successfully!";
}

if (coffeeSelect) {
    coffeeSelect.addEventListener("change", updateOrderSummary);
}

if (quantityInput) {
    quantityInput.addEventListener("input", updateOrderSummary);
}

addonCheckboxes.forEach(function(addon) {
    addon.addEventListener("change", updateOrderSummary);
});

if (coffeeSelect && quantityInput) {
    updateOrderSummary();
}