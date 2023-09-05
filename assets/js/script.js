const quotes = [
    {
        quote: '“Be yourself; everyone else is already taken.”',
        by: '― Oscar Wilde '
    },
    {
        quote: '“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”',
        by: '― Albert Einstein'
    },
    {
        quote: '“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.” ',
        by: '― Dr. Seuss '
    },
    {
        quote: '“Be the change that you wish to see in the world.” ',
        by: '― Mahatma Gandhi '
    },
    {
        quote: '“In three words I can sum up everything I\'ve learned about life: it goes on.” ',
        by: '― Robert Frost '
    },
    {
        quote: '“Don\’t walk in front of me I may not follow Don\’t walk behind me I may not lead Walk beside me just be my friend” ',
        by: '― Albert Camus '
    },
    {
        quote: '“If you tell the truth, you don\'t have to remember anything.”',
        by: '― Mark Twain '
    },
    {
        quote: '“A friend is someone who knows all about you and still loves you.”',
        by: '― Elbert Hubbard '
    },
    {
        quote: '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” ',
        by: '― Ralph Waldo Emerson'
    },
    {
        quote: '“It is better to be hated for what you are than to be loved for what you are not.” ',
        by: '― Andre Gide '
    },
    {
        quote: '“The fool doth think he is wise, but the wise man knows himself to be a fool.” ',
        by: '― William Shakespeare '
    },
    {
        quote: '“If you judge people, you have no time to love them.” ',
        by: '― Mother Teresa '
    },
    {
        quote: '“Life isn\'t about finding yourself. Life is about creating yourself.” ',
        by: '― George Bernard Shaw  '
    }
]


let getQuote = document.getElementById('getQuote')

getQuote.onclick = function () {
    let x = Math.floor(Math.random() * quotes.length)
    document.getElementById('quoteSection').innerHTML = quotes[x].quote
    document.getElementById('bySection').innerHTML = quotes[x].by
}