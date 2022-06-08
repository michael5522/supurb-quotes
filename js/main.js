
var mainQuote = document.querySelector('.centered');
var miniQuote = document.querySelector('.mini-text');
var authorQuote = document.querySelector('.author');

var targetUrl = encodeURIComponent('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl);
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  // console.log(xhr.status);
  // console.log(xhr.response);
  mainQuote.textContent = xhr.response.quoteText;
  authorQuote.textContent = xhr.response.quoteAuthor;
  miniQuote.textContent = xhr.response.quoteText;
});
xhr.send();
