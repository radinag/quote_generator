const quotes = [
{
name: "Aristotle",
quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing."
},
{
name: "Lao Tzu",
quote: "When I let go of what I am, I become what I might be."
},
{
name: "Albert Einstein",
quote: "I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself."
},
{
name: "Ayn Rand",
quote: "The question isn’t who is going to let me; it’s who is going to stop me."
},
{
name: "Friedrich Nietzsche",
quote: "That which does not kill us makes us stronger."
},
{
name: "Plato",
quote: "Wise men speak because they have something to say; fools because they have to say something."
},
{
name: "John Wooden",
quote: "Do not let what you cannot do interfere with what you can do."
},
{
name: "Thomas Edison",
quote: "I haven’t failed. I’ve just found 10,000 ways that won’t work."
},
{
name: "Ralph Waldo Emerson",
quote: "For every minute you are angry you lose sixty seconds of happiness."
},
{
name: "Albert Camus",
quote: "Don’t walk in front of me, I may not follow. Don’t walk behind me, I may not lead. Walk beside me and be my friend."  
}

]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {

    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = '- ' + quotes[number].name;
    quote.innerHTML = '"' + quotes[number].quote + '"';
}
