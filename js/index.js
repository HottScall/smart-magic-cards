// User Stories
//
// As a player I want to be able to be able to see a full deck of cards ordered by number and suit when I press “let’s get started”
// 1 - Create an array of numbers and faces
// 2 - Create and Array of suits
// 3 - Combine both arrays - new function, loop
// 4 - Render the cards to the DOM
// As a player I want to be able to shuffle a deck of cards
// 1 - Click a button named shuffle
// 2 - The deck of cards randomly generate a new order

// As a player I want to be able to turn all cards face down
// As a player I want to be able to turn a shuffled pack of cards back into their original state

const deck = [];
const suit = ["clubs", "spades", "diamonds", "hearts"];

const cardsWrapper = document.querySelector(".cards-wrapper");

function createCards() {
  const cards = [];
  for (let x = 0; x < suit.length; x++) {
    for (let i = 0; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit: suit[x]
      };
      cards.push(cardObject);
    }
  }

  // Cards are rendering each suit from 2 - 10 on the DOM
  // Console.log(cards) shows all cards in ordered value in the DOM
  // Issue must be within the render method

  // For each dataObject, create a new card and append it to the DOM

  function deckRenderer() {
    cards.forEach((card, i) => {
      const positionFromLeft = i * 19;
      const cardElement = document.createElement("div");
      cardElement.setAttribute("data-value", card.value);
      cardElement.classList.add("card", `${card.suit}-${card.value}`);
      cardElement.style.left = `${positionFromLeft}px`;
      cardsWrapper.append(cardElement);
    });
  }
  deckRenderer();
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
