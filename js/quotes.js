function changeQuotes() {
  var quotes = [
                "Without requirements or design, programming is the art of adding bugs to an empty text file.",
                "Give someone a program, you frustrate them for a day; teach them how to program, you frustrate them for a lifetime.",
                "A programming language is low level when its programs require attention to the irrelevant.",
                "If it doesn’t work, it doesn’t matter how fast it doesn’t work.",
                "We can't solve problems by using the same kind of thinking we used when we created them.",
                "There never can be a man so lost as one who is lost in the vast and intriate corridors of his own lonely mind, where none may reachand none may save.",
                "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
                "The value of an education in a liberal arts college is not the learning of many facts, but the training of the mind...",
                "Any one who considers arithmetical methods of producing random digits is, of course, in a state of sin.",
                "An infinite number of monkeys typing into GNU emacs would never make a good program.",
                "Microsoft isn't evil, they just make really crappy operating systems."
              ];

  var authors = [
                "Louis Srygley",
                "David Leinweber",
                "Alan J. Perlis",
                "Donald Knuth",
                "Mich Ravera",
                "Albert Einstein",
                "Isaac Asimov",
                "Edsger Dijkstra",
                "Albert Einstein",
                "John von Neumann",
                "Linus Torvalds",
                "Linus Torvalds"
              ];

  var actualQuote = Math.round( Math.random() * (quotes.length - 1 ) );

  document.getElementById("quotes").innerHTML = quotes[actualQuote] + " - " + authors[actualQuote];
}