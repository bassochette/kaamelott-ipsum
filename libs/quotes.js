const quotes = require("./quotes.json");
const oneQuote = () => quotes[Math.floor(Math.random()*quotes.length)]
const xQuotes = (x) => {
    let quotes = "";
    for (let i =0; i < x; i++) {
        quotes += oneQuote() + "\n"
    }
    return quotes
}
module.exports = { xQuotes };
