
var mainQuote = document.querySelector('.centered');
var miniQuote = document.querySelector('.mini-text');
var authorQuote = document.querySelector('.author');
var randomQuoteButton = document.querySelector('.random-quote');
var headingPhrase = document.querySelector('.heading');
var customQuote = document.querySelector('.custom-quote');
var yesButton = document.querySelector('.yes-button');
var noButton = document.querySelector('.no-button');
var backgroundOne = document.querySelector('.one');
var backgroundTwo = document.querySelector('.two');
var backgroundThree = document.querySelector('.three');
var backgroundFour = document.querySelector('.four');
var changeImage = document.querySelector('#img');
var buttonContainer = document.querySelector('.button-container');
var individualButtons = document.querySelectorAll('.mini');

randomQuoteButton.addEventListener('click', function () {
  randomNumberForChooseQuote();
  headingPhrase.textContent = 'Your Random Quote';
});

var counter = null;
customQuote.addEventListener('click', function () {
  counter = Math.floor(Math.random() * 4) + 1;
  randomQuoteButton.classList.add('hidden');
  customQuote.classList.add('hidden');
  yesButton.classList.remove('hidden');
  noButton.classList.remove('hidden');

  if (counter === 1) {
    mainQuote.textContent = '';
    miniQuote.textContent = '';
    headingPhrase.textContent = 'Custom Quote Generating';
    authorQuote.textContent = 'Would you like to receive an Inspirational Quote?';
  }
  if (counter === 2) {
    mainQuote.textContent = '';
    miniQuote.textContent = '';
    headingPhrase.textContent = 'Custom Quote Generating';
    authorQuote.textContent = 'Would you like to receive an Anime Quote?';
  }
  if (counter === 3) {
    mainQuote.textContent = '';
    miniQuote.textContent = '';
    headingPhrase.textContent = 'Custom Quote Generating';
    authorQuote.textContent = 'Would you like to receive a Kayne West Quote?';
  }
  if (counter === 4) {
    mainQuote.textContent = '';
    miniQuote.textContent = '';
    headingPhrase.textContent = 'Custom Quote Generating';
    authorQuote.textContent = 'Would you like to receive a Motivational Quote?';
  }
});

yesButton.addEventListener('click', function () {
  if (counter === 1) {
    headingPhrase.textContent = 'Custom Quote Generated';
    customQuote.textContent = 'Click to get Custom Quote';
    randomQuoteButton.textContent = 'Generate Random Quote';
    randomQuoteButton.classList.remove('hidden');
    customQuote.classList.remove('hidden');
    yesButton.classList.add('hidden');
    noButton.classList.add('hidden');
    quoteGeneratorOne();
  }
  if (counter === 2) {
    headingPhrase.textContent = 'Custom Quote Generated';
    customQuote.textContent = 'Click to get Custom Quote';
    randomQuoteButton.textContent = 'Generate Random Quote';
    randomQuoteButton.classList.remove('hidden');
    customQuote.classList.remove('hidden');
    yesButton.classList.add('hidden');
    noButton.classList.add('hidden');
    quoteGeneratorTwo();
  }
  if (counter === 3) {
    headingPhrase.textContent = 'Custom Quote Generated';
    customQuote.textContent = 'Click to get Custom Quote';
    randomQuoteButton.textContent = 'Generate Random Quote';
    randomQuoteButton.classList.remove('hidden');
    customQuote.classList.remove('hidden');
    yesButton.classList.add('hidden');
    noButton.classList.add('hidden');
    quoteGeneratorThree();
  }
  if (counter === 4) {
    headingPhrase.textContent = 'Custom Quote Generated';
    customQuote.textContent = 'Click to get Custom Quote';
    randomQuoteButton.textContent = 'Generate Random Quote';
    randomQuoteButton.classList.remove('hidden');
    customQuote.classList.remove('hidden');
    yesButton.classList.add('hidden');
    noButton.classList.add('hidden');
    quoteGeneratorFour();
  }
});

noButton.addEventListener('click', function () {
  if (counter === 4) {
    counter = 0;
  }
  counter++;

  if (counter === 1) {
    mainQuote.textContent = '';
    miniQuote.textContent = '';
    headingPhrase.textContent = 'Custom Quote Generating';
    authorQuote.textContent = 'Would you like to receive an Inspirational Quote?';
  }
  if (counter === 2) {
    mainQuote.textContent = '';
    miniQuote.textContent = '';
    headingPhrase.textContent = 'Custom Quote Generating';
    authorQuote.textContent = 'Would you like to receive an Anime Quote?';
  }
  if (counter === 3) {
    mainQuote.textContent = '';
    miniQuote.textContent = '';
    headingPhrase.textContent = 'Custom Quote Generating';
    authorQuote.textContent = 'Would you like to receive a Kayne West Quote?';
  }
  if (counter === 4) {
    mainQuote.textContent = '';
    miniQuote.textContent = '';
    headingPhrase.textContent = 'Custom Quote Generating';
    authorQuote.textContent = 'Would you like to receive a Motivational Quote?';
  }
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

backgroundOne.addEventListener('click', function () {
  changeImage.src = './images/001.jpeg';
});
backgroundTwo.addEventListener('click', function () {
  changeImage.src = './images/002.jpeg';
});
backgroundThree.addEventListener('click', function () {
  changeImage.src = './images/003.jpeg';
});
backgroundFour.addEventListener('click', function () {
  changeImage.src = './images/004.jpeg';
});

buttonContainer.addEventListener('click', function (event) {
  if (event.target.matches('.mini')) {
    for (var i = 0; i < individualButtons.length; i++) {
      if (individualButtons[i] !== event.target) {
        individualButtons[i].classList.remove('active');
      } else {
        individualButtons[i].classList.add('active');
      }
    }
  }
});
