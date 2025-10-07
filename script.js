let apiKey = "mmmmmmmmmmmmmmmmmm";
let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;


const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

currencies = ["AFN", "ALL", "DZD", "EUR", "AON", "XCD", "ARS", "AMD", "AUD",
    "EUR", "AZN", "BSD", "BHD", "BDT", "BBD", "BYN", "EUR", "BZD", "XOF", "BTN",
    "BOB", "BAM", "BWP", "BRL", "BND", "BGL", "XOF", "BIF", "CVE", "KHR", "XAF",
    "CAD", "XAF", "XAF", "CLP", "CNY", "COP", "KMF", "XAF", "NZD", "CRC", "XAF",
    "HRK", "CUP", "EUR", "EUR", "KPW", "CDF", "DKK", "DJF", "XCD", "DOP", "USD",
    "EGP", "USD", "XAF", "ERN", "EUR", "SZL", "ETB", "FJD", "EUR", "EUR", "XAF",
    "GMD", "GEL", "EUR", "EUR", "XCD", "GTQ", "GNF", "XAF", "GYD", "HTG", "ZWD",
    "HNL", "HUF", "ISK", "INR", "IDR", "IRR", "IQD", "EUR", "ILS", "EUR", "JMD",
    "JPY", "JOD", "KZT", "KES", "AUD", "KWD", "KGS", "LAK", "EUR", "LBP", "LSL",
    "LRD", "LYD", "EUR", "EUR", "MGA", "MWK", "MYR", "MVR", "XOF", "EUR", "USD",
    "MRU", "MUR", "MXN", "USD", "EUR", "MNT", "EUR", "MAD", "MZM", "MMK", "NAD",
    "AUD", "NPR", "EUR", "NZD", "NIO", "XOF", "NGN", "NZD", "NOK", "OMR", "PKR",
    "USD", "PAB", "PGK", "PYG", "PEN", "PHP", "PLN", "EUR", "QAR", "KRW", "MDL",
    "RON", "RUB", "RWF", "XCD", "XCD", "XCD", "WST", "EUR", "STN", "SAR", "XOF",
    "RSD", "SCR", "SLL", "SGD", "EUR", "EUR", "SBD", "SOS", "ZAR", "SSP", "EUR",
    "LKR", "SDG", "SRD", "SEK", "CHF", "SYP", "TJS", "THB", "MKD", "USD", "XOF",
    "TOP", "TTD", "TND", "TRY", "TMT", "AUD", "UGS", "UAH", "AED", "GBP", "TZS",
    "USD", "UYU", "UZS", "VUV", "VEF", "VND", "YER", "ZMK"
]


currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});

fromDropDown.value = "USD";
toDropDown.value = "INR";

let convertCurrency = () => {
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    if (amount.length != 0) {
        fetch(api)
            .then(resp => resp.json())
            .then((data) => {
                let fromExchangeRate = data.conversion_rates[fromCurrency];
                let toExchangeRate = data.conversion_rates[toCurrency];
                let convertedAmount = (amount / fromExchangeRate) *
                    toExchangeRate;
                result.innerHTML = ` ${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
            });
    } else {
        alert("Please fill in the amount");
    }
};

document
    .querySelector("#convert-button")
    .addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);