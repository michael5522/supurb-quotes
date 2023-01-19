
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
var loaderInvisible = document.querySelector('#loader');

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
    emptyQuote();
    customQuoteGenerating();
    authorQuoteInspiration();
  }
  if (counter === 2) {
    emptyQuote();
    customQuoteGenerating();
    authorQuoteAnime();
  }
  if (counter === 3) {
    emptyQuote();
    customQuoteGenerating();
    authorQuoteKayne();
  }
  if (counter === 4) {
    emptyQuote();
    customQuoteGenerating();
    authorQuoteMotivational();
  }
});

yesButton.addEventListener('click', function () {
  if (counter === 1) {
    customQuoteGenerated();
    randomQuoteButton.classList.remove('hidden');
    customQuote.classList.remove('hidden');
    yesButton.classList.add('hidden');
    noButton.classList.add('hidden');
    quoteGeneratorOne();
  }
  if (counter === 2) {
    customQuoteGenerated();
    randomQuoteButton.classList.remove('hidden');
    customQuote.classList.remove('hidden');
    yesButton.classList.add('hidden');
    noButton.classList.add('hidden');
    quoteGeneratorTwo();
  }
  if (counter === 3) {
    customQuoteGenerated();
    randomQuoteButton.classList.remove('hidden');
    customQuote.classList.remove('hidden');
    yesButton.classList.add('hidden');
    noButton.classList.add('hidden');
    quoteGeneratorThree();
  }
  if (counter === 4) {
    customQuoteGenerated();
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
    emptyQuote();
    customQuoteGenerating();
    authorQuoteInspiration();
  }
  if (counter === 2) {
    emptyQuote();
    customQuoteGenerating();
    authorQuoteAnime();
  }
  if (counter === 3) {
    emptyQuote();
    customQuoteGenerating();
    authorQuoteKayne();
  }
  if (counter === 4) {
    emptyQuote();
    CustomQuoteGenerating();
    authorQuoteMotivational();
  }
});

function quoteGeneratorOne() {
  var targetUrl = encodeURIComponent('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl);
  xhr.responseType = 'json';
  xhr.addEventListener('loadstart', function () {
    loaderInvisible.classList.remove('hidden');
  });
  xhr.addEventListener('load', function () {
    var result = xhr.response;
    mainQuote.textContent = result.quoteText;
    authorQuote.textContent = result.quoteAuthor;
    miniQuote.textContent = result.quoteText;
    loaderInvisible.classList.add('hidden');
  });
  xhr.send();
}

function quoteGeneratorTwo() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://animechan.vercel.app/api/random');
  xhr.responseType = 'json';
  xhr.addEventListener('loadstart', function () {
    loaderInvisible.classList.remove('hidden');
  });
  xhr.addEventListener('load', function () {
    var result = xhr.response;
    mainQuote.textContent = result.quote;
    authorQuote.textContent = result.character;
    miniQuote.textContent = result.quote;
    loaderInvisible.classList.add('hidden');
  });
  xhr.send();
}

function quoteGeneratorThree() {
  var targetUrl = 'https://api.kanye.rest';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl);
  xhr.responseType = 'json';
  xhr.addEventListener('loadstart', function () {
    loaderInvisible.classList.remove('hidden');
  });
  xhr.addEventListener('load', function () {
    var result = xhr.response;
    mainQuote.textContent = result.quote;
    authorQuote.textContent = 'Kayne West';
    miniQuote.textContent = result.quote;
    loaderInvisible.classList.add('hidden');
  });
  xhr.send();
}

function quoteGeneratorFour() {
  var targetUrl = encodeURIComponent('https://zenquotes.io/api/random');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl);
  xhr.responseType = 'json';
  xhr.addEventListener('loadstart', function () {
    loaderInvisible.classList.remove('hidden');
  });
  xhr.addEventListener('load', function () {
    var result = xhr.response[0];
    mainQuote.textContent = result.q;
    authorQuote.textContent = result.a;
    miniQuote.textContent = result.q;
    loaderInvisible.classList.add('hidden');
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

function emptyQuote() {
  mainQuote.textContent = '';
  miniQuote.textContent = '';
}

function customQuoteGenerating() {
  headingPhrase.textContent = 'Custom Quote Generating';
}

function customQuoteGenerated() {
  headingPhrase.textContent = 'Custom Quote Generated';
}

function CustomQuoteGenerating() {
  headingPhrase.textContent = 'Custom Quote Generating';
}

function authorQuoteInspiration() {
  authorQuote.textContent = 'Would you like to receive an Inspirational Quote?';
}

function authorQuoteAnime() {
  authorQuote.textContent = 'Would you like to receive an Anime Quote?';
}

function authorQuoteKayne() {
  authorQuote.textContent = 'Would you like to receive a Kayne West Quote?';
}

function authorQuoteMotivational() {
  authorQuote.textContent = 'Would you like to receive a Motivational Quote?';
}

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
