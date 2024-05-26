const quoteArray = [
  {
    quote:
      "You can’t wait for inspiration. You have to go after it with a club.",
    answer: "Jack London",
    options: ["Abraham Lincoln", "Jack London", "Winston Churchil"],
    points: 10,
    hint: "A pioneer of commercial fiction and American magazines, he was one of the first American authors to become an international celebrity and earn a large fortune from writing",
    id: 0,
  },
  {
    quote: "All a writer needs is talent and ink",
    answer: "J.K. Rowling",
    options: ["J.K. Rowling", "JOhn Grisham", "Don Lemon"],
    points: 10,
    hint: "THe author of Harry Potter",
    id: 1,
  },
  {
    quote: "The scariest moment is always just before you start.",
    answer: "Stephen King",
    options: ["Jesus Christ", "Oscar Wild", "Stephen King"],
    points: 10,
    hint: "is an American author. Called the 'King of Horror'",
    id: 2,
  },
  {
    quote: "Nobody buys a book that they don't pick up.",
    answer: "James Patterson",
    options: ["James Patterson", "Jordan Peterson", "Elon Musk"],
    points: 10,
    hint: "He is the creator of unforgettable characters and series, including Alex Cross, the Women's Murder Club, Jane Smith, and Maximum Ride",
    id: 3,
  },
  {
    quote:
      "You see a lot of young writers who have interesting ideas and a certain skill with words, but their story is not a story … it’s more of a vignette.",
    answer: "George R.R. Martin",
    options: ["George R.R. Martin", "Donald Trump", "Bill Clinton"],
    points: 10,
    hint: "He is the author of the series of epic fantasy novels A Song of Ice and Fire, which were adapted into the Emmy Award-winning HBO series Game of Thrones (2011–2019)",
    id: 4,
  },
  {
    quote:
      "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
    answer: "Robert Frost",
    options: ["Ernest Hemingway", "Charles Dickens", "Robert Frost"],
    points: 10,
    hint: "was known for his depictions of rural New England life, his grasp of colloquial speech, and his poetry about ordinary people in everyday situations",
    id: 5,
  },
  {
    quote: "If you have no critics, you’ll likely have no success.",
    answer: "Malcolm X",
    options: ["Martin Luther King", "Malcolm X", "Nelson Mandela"],
    points: 10,
    hint: "He was part of the Islam Nation and had a fallout with its leader during the civil rights movement",
    id: 6,
  },
  {
    quote: "You can make anything by writing.",
    answer: "C.S. Lewis",
    options: ["C.S. Lewis", "Peter Parker", "Leon Bailey"],
    points: 10,
    hint: "Even though he is known as an English writer, he is actually Irish and was born in Belfast, Northern Ireland.",
    id: 7,
  },
  {
    quote:
      "Write. Rewrite. When not writing or rewriting, read. I know of no shortcuts.",
    answer: "Larry L. King",
    options: ["Larry L. King", "J.K. Rowlings", "Barrack Obama"],
    points: 10,
    hint: `In 1964, King quit his Congressional job to concentrate on his writing, producing many magazine articles and fourteen books of both fiction and non-fiction, and became one of the leading figures in the "New Journalism." `,
    id: 8,
  },
  {
    quote: "I don’t need an alarm clock. My ideas wake me",
    answer: "Ray Bradbury",
    options: ["Elon Musk", "Ray Bradbury", "John Doe"],
    points: 10,
    hint: `scored his first writing gig when he was still a teen.`,
    id: 9,
  },
  {
    quote: "In order to write about life first you must live it.",
    answer: "Ernest Hemingway",
    options: ["Ernest Hemingway", "J.K. Rowlings", "Tina Barry"],
    hint: `He always left a piece of writing behind dedicated to each one of his ex wives`,
    id: 10,
    points: 10,
  },
  //   {
  //     quote: "Character is plot, plot is character",
  //     answer: "F. Scott Fitzgerald",
  //   },
  //   { quote: "Write what should not be forgotten.", answer: "Isabel Allende" },
  //   {
  //     quote: "If you don’t see the book you want on the shelf, write it.",
  //     answer: "Beverly Cleary",
  //   },
  //   {
  //     quote:
  //       "I know nothing in the world that has as much power as a word. Sometimes I write one, and I look at it, until it begins to shine.",
  //     answer: "Emily Dickinson",
  //   },
  //   {
  //     quote: "Write about the emotions you fear the most.",
  //     answer: "Laurie Halse Anderson",
  //   },
  //   {
  //     quote:
  //       "Almost all good writing begins with terrible first efforts. You need to start somewhere.",
  //     answer: "Anne Lamott",
  //   },
  //   {
  //     quote:
  //       "Almost all good writing begins with terrible first efforts. You need to start somewhere.",
  //     answer: "Anne Lamott",
  //   },
];
let gameQuotes = quoteArray.slice();
let currentItem;

let score = 0;
let continuePlay = true;

// first page objects
const startBtn = document.querySelector(".start-btn");
const firstPage = document.querySelector(".first-page");

// Game page objects
const gamePage = document.querySelector(".game-page");
const hintText = document.querySelector(".hint-text");
const hintBtn = document.querySelector(".hint-btn");
const quoteText = document.querySelector(".quote-text");
const quoteOptions = document.querySelector(".quote-options");
const options = document.querySelectorAll(".option-btn");
const scoreBtn = document.querySelector(".score-btn");
const resetBtn = document.querySelector(".reset-btn");
const guessNextBtn = document.querySelector(".guess-next");
// Game-over
const gameOver = document.querySelector(".game-over");

const gameOverHeader = document.querySelector(".game-over-header");
const scoreMessage = document.querySelector(".score-message");
const awardMessage = document.querySelector(".award-message");
console.log(gameOver.style.display);
// game functions

function gameStart() {
  firstPage.style.display = "none";
  gamePage.style.display = "block";
  hintText.style.display = "none";
}

function quoteGenerator() {
  if (gameQuotes.length === 0) {
    continuePlay = false;
    gameOverFunction();
    gameOverContent();

    return;
  } else {
    const randomizer = Math.floor(Math.random() * gameQuotes.length);
    currentItem = gameQuotes[randomizer];

    hintText.textContent = currentItem.hint;
    quoteText.textContent = `Who said "${currentItem.quote}"? `;

    for (let i = 0; i < options.length; i++) {
      options[i].textContent = currentItem.options[i];
    }

    gameQuotes.splice(randomizer, 1);
    console.log(gameQuotes.length);
  }
}

function gameRestart() {
  scoreBtn.textContent = `Your score:`;
  score = 0;
  gameQuotes = quoteArray.slice();
  gameOver.style.display = "none";
  quoteGenerator();
  for (let i = 0; i < options.length; i++) {
    options[i].removeAttribute("disabled");
  }
}

function guessNext(e) {
  if (e.target.textContent === currentItem.answer) {
    score += currentItem.points;
    scoreBtn.textContent = `Your score: ${score}`;
  }

  quoteGenerator();
}

function getHint() {
  hintText.style.display = "block";
  currentItem.points = currentItem.points - 3;
}
function gameOverFunction() {
  for (let i = 0; i < options.length; i++) {
    options[i].setAttribute("disabled", true);
  }
}

function gameOverContent() {
  let winMessage = "Congratulations, you won a trip to Dubai! 🧳";
  let loseMessage = "Better luck next time!";
  gameOver.style.display = "block";
  scoreMessage.textContent = `Your score was ${score}`;
  if (score >= 60) {
    awardMessage.textContent = winMessage;
    console.log(awardMessage);
  } else {
    awardMessage.textContent = loseMessage;
    console.log(awardMessage);
  }
}

// Game

startBtn.addEventListener("click", gameStart);
quoteGenerator();
hintBtn.addEventListener("click", getHint);

resetBtn.addEventListener("click", gameRestart);
for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", guessNext);
}
