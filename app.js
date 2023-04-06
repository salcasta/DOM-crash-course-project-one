const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

//30 quotes
const quotes = [{
    quote: `“The secret of getting ahead is getting started”`,
    person: `Mark Twain`
}, {
    quote: `“The only impossible journey is the one you never begin”`,
    person: `Tony Robbins`
}, {
    quote: `“The best way to get started is to quit talking and begin doing”`,
    person: `Walt Disney`
}, {
    quote: `“When you know what you want, and want it bad enough, you’ll find a way to get it”`,
    person: `Jim Rohn`
}, {
    quote: `“Go confidently in the direction of your dreams. Live the life you have imagined”`,
    person: `Henry David Thoreau`
}, {
    quote: `“Don’t be afraid to give up the good for the great”`,
    person: `John D. Rockefeller`
}, {
    quote: `“The most difficult thing is the decision to act; the rest is merely tenacity”`,
    person: `Amelia Earhart`
}, {
    quote: `“I believe that the only courage anybody ever needs is the courage to follow your dreams”`,
    person: `Oprah Winfrey`
}, {
    quote: `“The only limit to our realization of tomorrow will be our doubts of today”`,
    person: `Franklin D. Roosevelt`
}, {
    quote: `“Believe you can, and you’re halfway there”`,
    person: `Theodore Roosevelt`
}, {
    quote: `“I have learned over the years that when one’s mind is made up, this diminishes fear”`,
    person: `Rosa Parks`
}, {
    quote: `“The secret of change is to focus all of your energy, not on fighting the old, but on building the new” `,
    person: `Socrates`
}, {
    quote: `“If you don’t like something, change it. If you can’t change it, change your attitude.”`,
    person: `Mary Angelou`
}, {
    quote: `“You have brains in your head. You have feet in your shoes. You can steer yourself in any direction you choose”`,
    person: `Dr. Seuss`
}, {
    quote: `“First, have a definite, clear, practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end” `,
    person: `Aristotle`
}, {
    quote: `“Always bear in mind that your own resolution to success is more important than any other one thing”`,
    person: `Abraham Lincoln`
}, {
    quote: `“I find that the harder I work, the more luck I seem to have” `,
    person: `Thomas Jefferson`
}, {
    quote: `“Success is walking from failure to failure with no loss of enthusiasm”`,
    person: `Winston Churchill`
}, {
    quote: `“If you look really closely, most overnight successes took a long time”`,
    person: `Steve Jobs`
}, {
    quote: `“There are no secrets to success. It is the result of preparation, hard work, and learning from failure”`,
    person: `Colin Powell`
}, {
    quote: `“Our greatest glory is not in never falling, but in rising every time we fall” `,
    person: `Confucius`
}, {
    quote: `“Many of life’s failures are people who did not realize how close they were to success when they gave up”`,
    person: `Thomas A. Edison `
}, {
    quote: `“I alone cannot change the world, but I can cast a stone across the water to create many ripples”`,
    person: `Mother Teresa `
}, {
    quote: `“The only person you are destined to become is the person you decide to be”`,
    person: `Ralph Waldo Emerson`
}, {
    quote: ` “Be yourself, everyone else is already taken” `,
    person: `Oscar Wilde`
}, {
    quote: `“Gratitude is not only the greatest of virtues, but the parent of all others” `,
    person: `Cicero`
}, {
    quote: `“If life were predictable, it would cease to be life, and be without flavor”`,
    person: `Eleanor Roosevelt`
}, {
    quote: `“Live in the sunshine, swim the sea, drink the wild air”`,
    person: `Ralph Waldo Emerson`
}, {
    quote: `“In three words, I can sum up everything I’ve learned about life: it goes on”`,
    person: `Robert Frost `
}, {
    quote: `“Whoever is happy will make others happy too”`,
    person: `Anne Frank`
},];

btn.addEventListener('click', function () {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

});