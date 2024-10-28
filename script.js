const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const valueConvert = document.querySelector(".value");
    const valueConverted = document.querySelector(".valueConvert");

    const dolarToday = 5.2;
    const euroToday = 6.2;
    const libraToday = 7.4;
    const bitcoinToday = 399.2;

    if (currencySelect.value === "dolar") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value === "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }
    
    if (currencySelect.value === "libra") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    }

    
if (currencySelect.value === "bitcoin") {
    valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
    }).format(inputCurrencyValue / bitcoinToday);
}

    valueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
}

function changeCurrency() {
    const nameCurrency = document.getElementById("nameCurrency");
    const currencyImg = document.querySelector(".currencyImg");

    if (currencySelect.value === "dolar") {
        nameCurrency.innerHTML = "Dólar Americano";
        currencyImg.src = "./assets/estados-unidos (1) 1.png";
    }

    if (currencySelect.value === "euro") {
        nameCurrency.innerHTML = "Euro";
        currencyImg.src = "./assets/euro.png";
    }

if (currencySelect.value === "libra") {
    nameCurrency.innerHTML = "Libra"; 
    currencyImg.src = "./assets/libra 1.png"
}

if (currencySelect.value === "bitcoin") {
    nameCurrency.innerHTML = "Bitcoin"; 
    currencyImg.src = "./assets/bitcoin 1.png"
}

convertValues()
}
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
