const quotes = [
    "Far Kaliya Fool Ma Dhaqdo.",
    "Gacmo Wadajir Bay Wax Ku Gooyaan.",
    "Af Wax Cunay Xihshow.",
    "Shimbirba Shimbirkiisuu La Duulaa.",
    "Af Daboolan Waa Dahab.",
    "Lama Huraan Waa Cawska Jiilaal.",
    "Dhul Adan Lahayn Kuma Dhaxan Tiro",
    "Cagtii Joogsan Waysa Mar Bay Ceeb La Kulantaa",
    "Habar Fadhida Lagdan La Fudud",
    "Cimri Tagay Ceeb Laguma Sagootiyo.",
    "Waayeel Tag Lama Dhehe , Wuxuu Ku Tagaa La Tusaa.",
    "Tuug Intaadan Tuug Dhihin Buu Tuug Ku Dhahaa."
   
];

let currentQuoteIndex = -1;

const quoteElement = document.getElementById('quote');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const resetBtn = document.getElementById('reset-btn');
const welcomeBtn = document.getElementById('welcome-btn');
const welcomeMessage = document.getElementById('welcome-message');




let iconButton = document.querySelector("#iconButton")
let ulElement = document.querySelector("#links")
let buttons = document.querySelector("#buttons")
let close = document.querySelector("#closeButton")
iconButton.addEventListener("click", function(){
ulElement.style.display = "flex"
buttons.style.display = "block"
iconButton.style.display = "None"
close.style.display = "block"

})

close.addEventListener("click", function(){
    ulElement.style.display = "none"
buttons.style.display = "none"
iconButton.style.display = "block"
close.style.display = "none"

})

function showQuote(index) {
    quoteElement.textContent = quotes[index];
}

nextBtn.addEventListener('click', () => {
    currentQuoteIndex++;
    if (currentQuoteIndex >= quotes.length) {
        currentQuoteIndex = 0;
    }
    showQuote(currentQuoteIndex);
});

prevBtn.addEventListener('click', () => {
    currentQuoteIndex--;
    if (currentQuoteIndex < 0) {
        currentQuoteIndex = quotes.length - 1;
    }
    showQuote(currentQuoteIndex);
});

resetBtn.addEventListener('click', () => {
    currentQuoteIndex = -1;
    quoteElement.textContent = "Click Next to start viewing quotes!";
});

welcomeBtn.addEventListener('click', () => {
    welcomeMessage.textContent = "Welcome!";
});