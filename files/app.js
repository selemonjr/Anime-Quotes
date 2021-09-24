const quotesEl = document.querySelector(".text")
const authorEl = document.querySelector(".author");
const buttonEl = document.querySelector("button");
buttonEl.addEventListener("click",getQuote)
// We add some functionalities to the API//
function getQuote() {
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(result => quotes(result))
}
getQuote()
function quotes(info) {
   const facts = info.quote;
   const author = info.character;
   quotesEl.textContent = facts;
   authorEl.textContent = "~ " + author;
}
quotes()