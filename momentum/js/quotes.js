const quotes = [
    {
        quote: "The dice is cast.",
        author: "Julius Caesar"
    },
    {
        quote: "When they go low, we go high.",
        author: "Michelle Obama"
    },
    {
        quote: "A friend is a second myself.",
        author: "Aristotle"
    },
    {
        quote: "No pain, No gain.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Don't dream, Be it.",
        author: "Tim Curry"
    },
    {
        quote: "Life is journey.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Despite the forecast, live like it's spring.",
        author: "Lily Pulitzer"
    },
    {
        quote: "Don not try to be original, just to be good.",
        author: "Paul Rand"
    },
    {
        quote: "If you would be loved, love and be lovable.",
        author: "Benjamin Franklin"
    },
    {
        quote: "All progress takes place outside the comfort zone",
        author: "Michael John Bobak"
    }
];

const quote = document.querySelector('.quote p');
const author = document.querySelector('.quote span');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;