
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

//funcionsuma
const sum = function(a, b) {
    return a + b
    
}
// Declaramos una función con el nombre exacto "formEuroToDollar"

const fromEuroToDollar = function (valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    // convertimos el valor a dolares 
    let valueInEuro = valueInDollar / 1.07;
    let valueInYen = valueInEuro * 156.5;
    // retomamos el valor a yen 
    return Number(valueInYen.toFixed(2));
}

const fromYenToPound = function (valueInYen) {
    // convertimos el valor a pound
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = valueInEuro * 0.87;
    return Number(valueInPound.toFixed(2));
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
console.log(module);