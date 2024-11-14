let speedTypingTestEl = document.getElementById('speedTypingTest');
let timerEl = document.getElementById('timer');
let quoteDisplayEl = document.getElementById('quoteDisplay');
let resultEl = document.getElementById('result');
let quoteInputEl = document.getElementById('quoteInput');
let submitBtnEl = document.getElementById('submitBtn');
let resetBtnEl = document.getElementById('resetBtn');
let spinnerEl = document.getElementById('spinner');
let allEl = document.getElementById('all');
let url = 'https://apis.ccbp.in/random-quote';
let count;

function fetchQuote() {
    allEl.classList.remove('d-none')
    spinnerEl.classList.add('d-none')
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            quoteDisplayEl.textContent = (jsonData.content);
        });

    let n = 0;
    count = setInterval(function() {
        timerEl.textContent = n;
        n = n + 1
    }, 1000);
}

fetchQuote();

submitBtnEl.addEventListener('click', function(event) {
    if (quoteInputEl.value === quoteDisplayEl.textContent) {
        clearInterval(count);
        resultEl.textContent = "You typed in " + timerEl.textContent + ' seconds';

    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
});

resetBtnEl.addEventListener('click', function(event) {
    clearInterval(count);
    quoteInputEl.textContent = ""
    spinnerEl.classList.remove('d-none')
    allEl.classList.add('d-none')
    fetchQuote();

});