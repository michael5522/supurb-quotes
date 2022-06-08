
var mainQuote = document.querySelector('.centered');
var miniQuote = document.querySelector('.mini-text');
var authorQuote = document.querySelector('.author');
var customQuoteButton = document.querySelector('.random-quote');
var headingPhrase = document.querySelector('.heading');

customQuoteButton.addEventListener('click', function () {
  randomNumberForChooseQuote();
  headingPhrase.textContent = 'Your Custom Quote';
});

function quoteGeneratorOne() {
  var targetUrl = encodeURIComponent('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var result = xhr.response;
    mainQuote.textContent = result.quoteText;
    authorQuote.textContent = result.quoteAuthor;
    miniQuote.textContent = result.quoteText;
  });
  xhr.send();
}
function quoteGeneratorTwo() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://animechan.vercel.app/api/random');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var result = xhr.response;
    mainQuote.textContent = result.quote;
    authorQuote.textContent = result.character;
    miniQuote.textContent = result.quote;
  });
  xhr.send();
}

function quoteGeneratorThree() {
  var targetUrl = 'https://api.kanye.rest';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var result = xhr.response;
    mainQuote.textContent = result.quote;
    authorQuote.textContent = 'Kayne West';
    miniQuote.textContent = result.quote;
  });
  xhr.send();
}

function quoteGeneratorFour() {
  var targetUrl = encodeURIComponent('https://zenquotes.io/api/random');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var result = xhr.response[0];
    mainQuote.textContent = result.q;
    authorQuote.textContent = result.a;
    miniQuote.textContent = result.q;
  });
  xhr.send();
}

function randomNumberForChooseQuote() {
  var randomNumber = Math.floor(Math.random() * 4) + 1;
  if (randomNumber === 1) {
    quoteGeneratorOne();
  }
  if (randomNumber === 2) {
    quoteGeneratorTwo();
  }
  if (randomNumber === 3) {
    quoteGeneratorThree();
  }
  if (randomNumber === 4) {
    quoteGeneratorFour();
  }
}

randomNumberForChooseQuote();
