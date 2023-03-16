let speedTypingTestElement = document.getElementById("speedTypingTest");
let timerElement = document.getElementById("timer");
let quoteDisplayElement = document.getElementById("quoteDisplay");
let quoteInputElement = document.getElementById("quoteInput");
let resultElement = document.getElementById("result");
let submitBtnElement = document.getElementById("submitBtn");
let resetBtnElement = document.getElementById("resetBtn");
let spinnerElement = document.getElementById("spinner");

let counter = 0;
spinnerElement.classList.toggle("d-none");

function startCounter() {
    counter += 1;
    timerElement.textContent = counter;
    console.log(counter);
}
let counterValue = setInterval(startCounter, 1000);

function getrandomQuote() {
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerElement.classList.add("d-none");

            let quote = jsonData.content;
            quoteDisplayElement.textContent = quote;
            console.log(jsonData.content);
        });
}
getrandomQuote();
startCounter();

submitBtnElement.onclick = function() {
    if (quoteInputElement.value === quoteDisplayElement.textContent) {
        clearInterval(counterValue);
        resultElement.textContent = "You Typed in " + counter + " seconds";
    } else {
        resultElement.textContent = "You typed Incorrect Sentence";

    }
};

resetBtnElement.onclick = function() {
    spinnerElement.classList.remove("d-none");
    getrandomQuote();
    startCounter();
    counter = 0;
    resultElement.textContent = "";
    quoteInputElement.value = "";
};