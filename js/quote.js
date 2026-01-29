const quote = document.querySelector('.quote__text');
const author = document.querySelector('.quote__author');
const changeQouteBtn = document.querySelector('.change-qoute__btn');

let data = [];

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * data.length);
  quote.textContent = data[randomIndex].text;
  author.textContent = data[randomIndex].author;
}

async function getQuotes() {
  const quotes = "assets/data.json";
  const res = await fetch(quotes);
  data = await res.json();

  showRandomQuote()
}

export function initQoutes() {
  getQuotes();
  changeQouteBtn.addEventListener('click', showRandomQuote);
}
