// User Stories
//
// As a player I want to be able to be able to see a full deck of cards ordered by number and suit when I press “let’s get started”
// 1 - Create an array of numbers and faces
// 2 - Create and Array of suits
// 3 - Combine both arrays - new function, loop
// 4 - Render the cards to the DOM
// As a player I want to be able to shuffle a deck of cards
// As a player I want to be able to turn all cards face down
// As a player I want to be able to turn a shuffled pack of cards back into their original state

const suit = ["clubs", "spades", "diamonds", "hearts"];
const cardValue = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const cardsWrapper = document.querySelector(".cards-wrapper");

function createCards() {
  const cards = [];

  for (let x = 0; x < suit.length; x++) {
    for (let i = 0; i < cardValue.length; i++) {
      const cardObject = {
        value: cardValue[i],
        suit: suit[x]
      };
      cards.push(cardObject);
    }
    console.log(createCards);
  }

  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 15;
    const cardElement = document.createElement("div");
    cardElement.setAttribute("data-value", card.value);
    cardElement.classList.add("card", `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  // Your Code
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById("start-game").addEventListener("click", startGame);
